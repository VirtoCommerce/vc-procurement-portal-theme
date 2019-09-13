import { Injectable } from '@angular/core';
import WorkflowFile from 'src/assets/workflow/workflow.json';
const WORKFLOWS_STORAGE_KEY = 'vc_procurement_portal_workflows_metadata';

@Injectable({
  providedIn: 'root'
})
export class WorkflowStorageService {

  constructor() {
    this.deployStorageIfNotExists();
  }

  public getWorkflowItems(): any {
    const result = this.getStorage().map(workflow => {
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
    const result = this.getStorage().find(workflow => workflow.IsActive === true);
    const errorMessage = 'Can\'t find active workflow';

    if (result == null) {
      throw Error(errorMessage);
    }

    if (result.Workflow == null) {
      throw Error(errorMessage);
    }

    return result.Workflow;
  }

  public changeWorkflow(name: string, by: string, isActive: boolean) {
    const storage = this.getStorage();

    storage.forEach(workflow => {
      if (workflow.Name === name) {
        workflow.ActivatedBy = by;
        workflow.IsActive = isActive;
        workflow.ActivatedAt = new Date();
      } else {
        workflow.IsActive = !isActive;
      }
    });

    this.updateStorage(storage);
  }

  private updateStorage(storage: any) {
    localStorage.setItem(WORKFLOWS_STORAGE_KEY, JSON.stringify(storage));
  }

  private getStorage(): any {
    return JSON.parse(localStorage.getItem(WORKFLOWS_STORAGE_KEY));
  }

  private deployStorageIfNotExists() {
    const item = localStorage.getItem(WORKFLOWS_STORAGE_KEY);
    if (item == null) {
      localStorage.setItem(WORKFLOWS_STORAGE_KEY, JSON.stringify(WorkflowFile));
    }
  }
}
