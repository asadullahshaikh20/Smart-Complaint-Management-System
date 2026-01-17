import StorageManager from './storage.js';
import { DateUtils, StringUtils } from './utils.js';

// Complaint Class - represents a single complaint
class Complaint {
    constructor({ id, name, email, category, priority, description, status = 'Pending', createdAt }) {
        this.id = id || StringUtils.generateId('CMP');
        this.name = name;
        this.email = email;
        this.category = category;
        this.priority = priority;
        this.description = description;
        this.status = status;
        this.createdAt = createdAt || DateUtils.getCurrentTimestamp();
    }

    // Convert to plain object for storage
    toObject() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            category: this.category,
            priority: this.priority,
            description: this.description,
            status: this.status,
            createdAt: this.createdAt
        };
    }

    // Get formatted date
    getFormattedDate() {
        return DateUtils.formatDate(this.createdAt);
    }

    // Get relative time
    getRelativeTime() {
        return DateUtils.getRelativeTime(this.createdAt);
    }

    // Toggle status between Pending and Resolved
    toggleStatus() {
        this.status = this.status === 'Pending' ? 'Resolved' : 'Pending';
        return this.status;
    }
}

// Complaint Manager Class - handles all complaint operations
class ComplaintManager {
    constructor() {
        this.storage = new StorageManager('complaints');
        this.complaints = this.loadComplaints();
    }

    // Load complaints from storage
    loadComplaints() {
        const data = this.storage.get();
        return data.map(item => new Complaint(item));
    }

    // Save complaints to storage
    saveComplaints() {
        const data = this.complaints.map(complaint => complaint.toObject());
        return this.storage.save(data);
    }

    // Add new complaint (returns Promise to simulate async operation)
    addComplaint(complaintData) {
        return new Promise((resolve, reject) => {
            try {
                // Simulate network delay
                setTimeout(() => {
                    const complaint = new Complaint(complaintData);
                    this.complaints.push(complaint);

                    if (this.saveComplaints()) {
                        resolve(complaint);
                    } else {
                        reject(new Error('Failed to save complaint'));
                    }
                }, 500);
            } catch (error) {
                reject(error);
            }
        });
    }

    // Get all complaints
    getAllComplaints() {
        return [...this.complaints]; // Return copy using spread operator
    }

    // Get complaint by ID
    getComplaintById(id) {
        return this.complaints.find(complaint => complaint.id === id);
    }

    // Update complaint status
    updateComplaintStatus(id, status) {
        const complaint = this.getComplaintById(id);

        if (complaint) {
            complaint.status = status;
            this.saveComplaints();
            return true;
        }

        return false;
    }

    // Toggle complaint status
    toggleComplaintStatus(id) {
        const complaint = this.getComplaintById(id);

        if (complaint) {
            complaint.toggleStatus();
            this.saveComplaints();
            return complaint.status;
        }

        return null;
    }

    // Delete complaint
    deleteComplaint(id) {
        const index = this.complaints.findIndex(complaint => complaint.id === id);

        if (index !== -1) {
            this.complaints.splice(index, 1);
            this.saveComplaints();
            return true;
        }

        return false;
    }

    // Filter complaints by status
    filterByStatus(status) {
        return this.complaints.filter(complaint => complaint.status === status);
    }

    // Filter complaints by category
    filterByCategory(category) {
        return this.complaints.filter(complaint => complaint.category === category);
    }

    // Filter complaints by priority
    filterByPriority(priority) {
        return this.complaints.filter(complaint => complaint.priority === priority);
    }

    // Search complaints by keyword
    searchComplaints(keyword) {
        const lowerKeyword = keyword.toLowerCase();

        return this.complaints.filter(complaint =>
            complaint.name.toLowerCase().includes(lowerKeyword) ||
            complaint.email.toLowerCase().includes(lowerKeyword) ||
            complaint.category.toLowerCase().includes(lowerKeyword) ||
            complaint.description.toLowerCase().includes(lowerKeyword) ||
            complaint.id.toLowerCase().includes(lowerKeyword)
        );
    }

    // Advanced filter with multiple criteria using destructuring
    advancedFilter({ status, category, priority, searchTerm } = {}) {
        let results = [...this.complaints];

        if (status && status !== 'all') {
            results = results.filter(c => c.status === status);
        }

        if (category && category !== 'all') {
            results = results.filter(c => c.category === category);
        }

        if (priority && priority !== 'all') {
            results = results.filter(c => c.priority === priority);
        }

        if (searchTerm) {
            const lowerTerm = searchTerm.toLowerCase();
            results = results.filter(c =>
                c.name.toLowerCase().includes(lowerTerm) ||
                c.email.toLowerCase().includes(lowerTerm) ||
                c.description.toLowerCase().includes(lowerTerm) ||
                c.id.toLowerCase().includes(lowerTerm)
            );
        }

        return results;
    }

    // Get statistics
    getStatistics() {
        const total = this.complaints.length;
        const pending = this.filterByStatus('Pending').length;
        const resolved = this.filterByStatus('Resolved').length;

        // Using object destructuring and spread
        const priorityCounts = this.complaints.reduce((acc, complaint) => {
            acc[complaint.priority] = (acc[complaint.priority] || 0) + 1;
            return acc;
        }, {});

        const categoryCounts = this.complaints.reduce((acc, complaint) => {
            acc[complaint.category] = (acc[complaint.category] || 0) + 1;
            return acc;
        }, {});

        return {
            total,
            pending,
            resolved,
            priorityCounts,
            categoryCounts
        };
    }

    // Get recent complaints (last N)
    getRecentComplaints(count = 5) {
        return [...this.complaints]
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .slice(0, count);
    }

    // Clear all complaints
    clearAllComplaints() {
        this.complaints = [];
        return this.storage.clear();
    }

    // Export complaints as JSON (for download)
    exportToJSON() {
        const data = this.complaints.map(c => c.toObject());
        return JSON.stringify(data, null, 2);
    }

    // Import complaints from JSON
    importFromJSON(jsonString) {
        try {
            const data = JSON.parse(jsonString);
            const importedComplaints = data.map(item => new Complaint(item));
            this.complaints = [...this.complaints, ...importedComplaints];
            this.saveComplaints();
            return true;
        } catch (error) {
            console.error('Error importing complaints:', error);
            return false;
        }
    }
}

// Export the classes
export { Complaint, ComplaintManager };
export default ComplaintManager;
