import { Injectable } from '@angular/core';
import WorkflowFile from 'src/assets/workflow/workflow.json';
const WORKFLOWS_STORAGE_KEY = 'vc_procurement_portal_workflows_metadata';

@Injectable({
  providedIn: 'root'
})
export class WorkflowStorageService {

  constructor() {
    this.setStorageIfNotNotExists();
  }

  public getWorkflowItems(): any {
    const result = this.get().map(workflow => {
      return {
        Name: workflow.Name,
        ActivatedBy: workflow.ActivatedBy,
        ActivatedAt: workflow.ActivatedAt,
        IsActive: workflow.IsActive,
        ImageUrl: workflow.Workflow.ImageUrl
      };
    });

    return result;
  }

  public getActiveWorkflow(): any {
    const result = this.get().find(workflow => workflow.IsActive === true);
    const errorMessage = 'Can\'t find active workflow';

    if (result == null) {
      throw Error(errorMessage);
    }

    if (result.Workflow == null) {
      throw Error(errorMessage);
    }

    return result.Workflow;
  }

  public changeWorkflow(name: string, by: string, isActive: boolean): void {
    const storage = this.get();

    storage.forEach(workflow => {
      if (workflow.Name === name) {
        workflow.ActivatedBy = by;
        workflow.IsActive = isActive;
        workflow.ActivatedAt = new Date();
      } else {
        workflow.IsActive = !isActive;
      }
    });

    this.set(storage);
  }

  private set(storage: any): void {
    localStorage.setItem(WORKFLOWS_STORAGE_KEY, JSON.stringify(storage));
  }

  private get(): any {
    this.setStorageIfNotNotExists();
    return JSON.parse(localStorage.getItem(WORKFLOWS_STORAGE_KEY));
  }

  private setStorageIfNotNotExists(): void {
    if (!this.isStorageExists()) {
      this.set(WorkflowFile.Workflows);
    }
  }

  private isStorageExists(): boolean {
    return localStorage.getItem(WORKFLOWS_STORAGE_KEY) == null ? false : true;
  }
}
