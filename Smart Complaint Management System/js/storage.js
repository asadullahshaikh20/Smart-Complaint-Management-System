class StorageManager {
    constructor(storageKey = 'complaints') {
        this.storageKey = storageKey;
    }

    // Save data to Local Storage
    save(data) {
        try {
            const jsonData = JSON.stringify(data);
            localStorage.setItem(this.storageKey, jsonData);
            return true;
        } catch (error) {
            console.error('Error saving to localStorage:', error);
            return false;
        }
    }

    // Retrieve data from Local Storage
    get() {
        try {
            const jsonData = localStorage.getItem(this.storageKey);
            return jsonData ? JSON.parse(jsonData) : [];
        } catch (error) {
            console.error('Error retrieving from localStorage:', error);
            return [];
        }
    }

    // Clear all data
    clear() {
        try {
            localStorage.removeItem(this.storageKey);
            return true;
        } catch (error) {
            console.error('Error clearing localStorage:', error);
            return false;
        }
    }

    // Check if storage is available
    static isAvailable() {
        try {
            const test = '__storage_test__';
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            return true;
        } catch (e) {
            return false;
        }
    }
}

// Export for ES6 module usage
export default StorageManager;
