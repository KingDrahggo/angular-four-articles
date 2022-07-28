import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {
  constructor() {}

  border = [
    {
      borderColor: 'blue',
    },
    {
      borderColor: 'black',
    },
    {
      borderColor: 'red',
    },
    {
      borderColor: 'green',
    },
  ];
  news = [
    {
      id: 0,
      header: 'What an Interface',
      content:
        'An Interface is a specification that identifies a related set of properties and methods to be implemented by a class. In other words, a given class agrees to support this specification when it implements that interface. The interface is simply the definition of the properties and methods, and the class that implements that interface has the actual code for each of those defined properties and methods. In Typescript, you can use the interface itself as a data type. Interfaces in Typescript are a development time only concept, they are not included in the final JavaScript.',
      buttonColor: 'Blue',
    },
    {
      id: 1,
      header: 'Services & Dependencies',
      content:
        'Service is a broad category encompassing any value, function, or feature that an application needs. A service is typically a class with a narrow, well-defined purpose. It should do something specific and do it well. A component should use services for tasks that dont involve the view or application logic. Services are good for tasks such as fetching data from the server, validating user input, or logging directly to the console. By defining such processing tasks in an injectable service class, you make those tasks available to any component.',
      buttonColor: 'Black',
    },
    {
      id: 2,
      header: 'What is NgOf',
      content:
        'The ngForOf directive is generally used in the shorthand form *ngFor. In this form, the template to be rendered for each iteration is the content of an anchor element containing the directive. The following example shows the shorthand syntax with some options, contained in an <li> element. The shorthand form expands into a long form that uses the ngForOf selector on an <ng-template> element. The content of the <ng-template> element is the <li> element that held the short-form directive.',
      buttonColor: 'Red',
    },
    {
      id: 3,
      header: 'What is NgClass',
      content:
        'ngClass is a directive in Angular that adds and removes CSS classes on an HTML element. In this article, we are talking about ngClass in Angular only, not ng-class in angular.js. Two things we have to understand first are property binding and interpolation in Angular. Lets take the placeholder attribute of input as an example. Given that we have variable = (some text) defined in the component, then all the above code will do exactly the same thing. I would consider interpolation ({{ }}) as an eval.',
      buttonColor: 'Green',
    },
  ];

  addBorderColor() {
    for (let c of this.border) {
      return c;
    }
  }
  ngOnInit() {}
}
