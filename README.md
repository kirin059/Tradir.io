## Template

### Instructions

Use the following open api to get data for the table: https://api.punkapi.com/v2/beers  
The api returns a list of Beer Objects.

#### Styling

* Use Styled Components to style your project
* Ant Design can be used for basic components (https://ant.design/components/overview/)

#### Required
* Redirect users to ``/home`` when they first arrive

* Create a Link to a ``/beerlist`` page on the homepage

* Create a page with a table for the list of Beers (material table can be used https://material-table.com/#/docs/get-started)
  - when a column header is drag and dropped, the new column order should be stored in redux so that the order is maintained even when a user moves between ``/home`` and ``/beerlist``

* When a beer name is clicked on, a modal should appear containing all the info of the selected beer

* Create a filter so that users can filter the beers by ``abv`` range ex)"5-6", "6-7"
  - multiselection should be available

#### Optional
* Create a Shopping basket to add and remove beers from  
  - Shopping basket should be accessible from both ``/home`` and ``/beerlist``
  
### Grading Standards
* Completion of the required functionalities(50%)
* Code Quality (35%)
* UI/UX Design (15%)

*Additional features can be added if the tester wishes to display more than the required functionalities

