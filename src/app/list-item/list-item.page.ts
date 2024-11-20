import { Component, OnInit } from '@angular/core';
import { ListItemService } from '../services/list-item.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.page.html',
  styleUrls: ['./list-item.page.scss'],
})
export class ListItemPage implements OnInit {
  listItems: any[] = [];
  newItem: { name: string; isComplete: boolean } = {
    name: '',
    isComplete: false,
  };

  constructor(
    private listItemService: ListItemService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.fetchListItems();
  }

  fetchListItems() {
    this.listItemService.getListItems().subscribe((data) => {
      this.listItems = data;
    });
  }

  async addItem() {
    if (!this.newItem.name) return;

    this.listItemService.createListItem(this.newItem).subscribe(() => {
      this.newItem = { name: '', isComplete: false };
      this.fetchListItems();
    });
  }

  async deleteItem(id: string) {
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: 'Are you sure you want to delete this item?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          handler: () => {
            this.listItemService.deleteListItem(id).subscribe(() => {
              this.fetchListItems();
            });
          },
        },
      ],
    });

    await alert.present();
  }

  toggleComplete(item: any) {
    item.isComplete = !item.isComplete;
    this.listItemService.updateListItem(item.id, item).subscribe();
  }
}
