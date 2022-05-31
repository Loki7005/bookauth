import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  bookForm!: FormGroup;
  myBooks: any = [];
  saveLogin = false;
  constructor( private _book: BookService) { }

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      'bookid': new FormControl(null),
      'bookname': new FormControl(null, Validators.required),
      'author': new FormControl(null)
    })
  }

  onPushBook(){
    const bookid = this.bookForm.get('bookid')?.value;
    const bookname = this.bookForm.get('bookname')?.value;
    const author = this.bookForm.get('author')?.value;

    this.myBooks.push({
      bookid:bookid,
      bookname:bookname,
      author:author
    })
    this.saveLogin =true;
    this.bookForm.reset();
  }
  onSave(){
    this._book.saveBook(this.myBooks).subscribe( sub => {
      console.log(sub);
      this.saveLogin = false;
    }, 
    error => {
      console.log(error);
    })
  }
  onGet(){
    this._book.getBook(this.myBooks).subscribe( sub => {
      console.log(sub);
    }, 
    error => { 
      console.log(error);
    })
  }

}
