import { Component, OnInit } from '@angular/core';
import { Item } from '../certificate-item/Item';

@Component({
  selector: 'app-all-certificates',
  templateUrl: './all-certificates.component.html',
  styleUrls: ['./all-certificates.component.scss']
})
export class AllCertificatesComponent implements OnInit {

  items: Item[] = [{
    id: 1, description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          asperiores itaque similique sed, quas corrupti sint placeat corporis
          beatae perferendis laborum nisi eligendi fuga.Laborum optio adipisci
          corrupti saepe delectus.`, title: 'Medical Assistant (CCMA)'
  }, {
    id: 2, description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          asperiores itaque similique sed, quas corrupti sint placeat corporis
          beatae perferendis laborum nisi eligendi fuga.Laborum optio adipisci
          corrupti saepe delectus.`, title: 'Phlebotomy Technician (CPT)'
  }, {
    id: 3, description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          asperiores itaque similique sed, quas corrupti sint placeat corporis
          beatae perferendis laborum nisi eligendi fuga.Laborum optio adipisci
          corrupti saepe delectus.`, title: 'Medical Administrative Assistant (CMAA)'
  }, {
    id: 4, description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          asperiores itaque similique sed, quas corrupti sint placeat corporis
          beatae perferendis laborum nisi eligendi fuga.Laborum optio adipisci
          corrupti saepe delectus.`, title: 'EKG Technician'
  }, {
    id: 5, description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          asperiores itaque similique sed, quas corrupti sint placeat corporis
          beatae perferendis laborum nisi eligendi fuga.Laborum optio adipisci
          corrupti saepe delectus.`, title: 'Electronic Health Record Specialist (CEHRS)'
  }, {
    id: 5, description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          asperiores itaque similique sed, quas corrupti sint placeat corporis
          beatae perferendis laborum nisi eligendi fuga.Laborum optio adipisci
          corrupti saepe delectus.`, title: 'Pharmacy Technicians(Cpht)'
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
