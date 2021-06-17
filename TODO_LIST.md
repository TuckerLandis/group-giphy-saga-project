

SEARCH VIEW

    - [ ] search bar input
        - [ ] giphy api
            - [ ] Component LIST GIFs 
                - Map over all response gifs
                - [ ] Component List item
                    - [ ] Favorite button


Data Model







Components
Route 1 ('/')
- [ ] SearchForm
- [ ] ImageList
    - [ ] ImageItem
Route 2 ('/favorite')
- [ ] FavoriteList
    - [ ] FavoriteItem




Reducers 
- [ ] categories
    - [ ] GET request
- [ ] favoritesList
    - [ ] GET request
    - [ ] PUT request
    - [ ] STRETCH: DELETE request
- [ ] searchResults
    - [ ] GET request


Action Names
- [ ] To Reducers
    - [ ] 'SET_SEARCH_IMAGES' -- Reducer Name
    - [ ] 'SET_FAVORITES'


- [ ] To Sagas
    <!-- - [ ] 'SEARCH_GIFS'  -->
    - [ ] 'FETCH_RESULTS' - GET route attached to GIPHY API query
        - [ ] 'SET_SEARCH_IMAGES'
    - [ ] 'FETCH_FAVORITES' GET route to DB
    - [ ] 'POST_FAVORITE'





