export class AppEntity {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
  
    constructor(id: string, name: string, description: string, createdAt: Date, updatedAt: Date) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
    }
  
    updateDescription(newDescription: string) {
      this.description = newDescription;
      this.updatedAt = new Date();
    }
  
    isActive(): boolean {
      const now = new Date();
      const activeThreshold = new Date(now.setMonth(now.getMonth() - 1)); // Active if updated within the last month
      return this.updatedAt > activeThreshold;
    }
  }
  