let budgetData = [
    { "amount": 1.15, "name": "Coffee", "category": "Coffee", "date": "2022-02-21T13:56:00+01:00" },
    { "amount": 15.7, "name": "Ramen", "category": "Grocery", "date": "2022-02-21T20:07:10+01:00" },
    { "amount": 11.08, "name": "Five Guys", "category": "Food", "date": "2022-02-21T20:07:43+01:00" },
    { "amount": 11.27, "name": "Ear Plugs", "category": "Health", "date": "2022-02-22T00:58:16+01:00" },
    { "amount": 8.5, "name": "Breakfast", "category": "Food", "date": "2022-02-22T12:12:19+01:00" },
    { "amount": 15, "name": "Rooftop Bar", "category": "Drinks", "date": "2022-02-22T19:12:19+01:00" },
    { "amount": 3, "name": "Beer", "category": "Drinks", "date": "2022-02-22T21:12:19+01:00" },
    { "amount": 20.53, "name": "Dia", "category": "Grocery", "date": "2022-02-23T11:55:07+01:00" },
    { "amount": 7.49, "name": "Jolibee", "category": "Food", "date": "2022-02-23T18:12:29+01:00" },
    { "amount": 19, "name": "Dubliners", "category": "Drinks", "date": "2022-02-23T23:09:32+01:00" },
    { "amount": 11, "name": "Thai Food", "category": "Food", "date": "2022-02-24T19:04:57+01:00" },
    { "amount": 9, "name": "ESN Event", "category": "Drinks", "date": "2022-02-24T21:04:01+01:00" },
    { "amount": 9.73, "name": "Steak", "category": "Grocery", "date": "2022-02-25T16:03:55+01:00" },
    { "amount": 20, "name": "Orange Data Plan", "category": "Subscription", "date": "2022-02-25T16:04:15+01:00" },
    { "amount": 10, "name": "ESN Membership", "category": "Health", "date": "2022-02-25T22:19:05+01:00" },
    { "amount": 14, "name": "Haircut", "category": "Coffee", "date": "2022-02-25T22:19:19+01:00" },
    { "amount": 13.25, "name": "Study Beers", "category": "Drinks", "date": "2022-02-26T18:53:47+01:00" },
    { "amount": 17.56, "name": "Corte Ingles", "category": "Grocery", "date": "2022-02-26T19:27:36+01:00" },
    { "amount": 17, "name": "Bule Bule", "category": "Drinks", "date": "2022-02-26T21:53:58+01:00" },
    { "amount": 10.2, "name": "Lunch", "category": "Food", "date": "2022-02-27T17:30:53+01:00" },

    { "amount": 2.45, "name": "Breakfast", "category": "Food", "date": "2022-02-28T13:51:41+01:00" },
    { "amount": 12.05, "name": "Lunch", "category": "Food", "date": "2022-02-28T21:15:55+01:00" },
    { "amount": 14.13, "name": "Sushi", "category": "Food", "date": "2022-03-01T14:01:31+01:00" },
    { "amount": 7, "name": "100 Montaditos", "category": "Drinks", "date": "2022-03-01T17:06:00+01:00" },
    { "amount": 8.04, "name": "Tacos", "category": "Food", "date": "2022-03-01T23:06:00+01:00" },
    { "amount": 1.7, "name": "Breakfast", "category": "Food", "date": "2022-03-02T10:53:00+01:00" },
    { "amount": 6, "name": "Lunch", "category": "Food", "date": "2022-03-02T15:20:00+01:00" },
    { "amount": 13, "name": "Drinks", "category": "Drinks", "date": "2022-03-02T22:07:00+01:00" },
    { "amount": 10.95, "name": "Lunch", "category": "Food", "date": "2022-03-03T14:36:00+01:00" },
    { "amount": 21.82, "name": "Grocery", "category": "Grocery", "date": "2022-03-03T18:12:00+01:00" },
    { "amount": 10.9, "name": "Pres", "category": "Drinks", "date": "2022-03-03T23:24:00+01:00" },
    { "amount": 2.6, "name": "McDonald's Beer", "category": "Drinks", "date": "2022-03-03T23:59:59+01:00" },
    { "amount": 20, "name": "Teatro Kapital", "category": "Drinks", "date": "2022-03-03T23:59:59+01:00" },
    { "amount": 21.8, "name": "Lunch", "category": "Food", "date": "2022-03-04T14:14:00+01:00" },
    { "amount": 3.6, "name": "Milkshake", "category": "Food", "date": "2022-03-04T16:04:00+01:00" },
    { "amount": 10.9, "name": "Chinese Grocery", "category": "Food", "date": "2022-03-04T15:26:00+01:00" },
    { "amount": 1.1, "name": "Breakfast", "category": "Food", "date": "2022-03-05T09:32:00+01:00" },
    { "amount": 2.5, "name": "Beer", "category": "Drinks", "date": "2022-03-05T04:07:00+01:00" },
    { "amount": 8.49, "name": "KFC", "category": "Food", "date": "2022-03-05T18:37:00+01:00" },
    { "amount": 45.5, "name": "Bule Bule", "category": "Drinks", "date": "2022-03-05T11:59:00+01:00" },

    { "amount": 2.2, "name": "Breakfast", "category": "Food", "date": "2022-03-07T10:18:32+01:00" },
    { "amount": 37.7, "name": "Chinese Grocery", "category": "Grocery", "date": "2022-03-07T00:00:00+01:00" },
    { "amount": 3, "name": "Breakfast", "category": "Food", "date": "2022-03-08T10:58:00+01:00" },
    { "amount": 7.45, "name": "Lunch", "category": "Food", "date": "2022-03-08T14:51:55+01:00" },
    { "amount": 3.9, "name": "Snack", "category": "Food", "date": "2022-03-08T20:04:55+01:00" },
    { "amount": 7.95, "name": "Popeye's", "category": "Food", "date": "2022-03-09T18:28:20+01:00" },
    { "amount": 15, "name": "Commo", "category": "Drinks", "date": "2022-03-09T20:48:00+01:00" },
    { "amount": 6.5, "name": "Shawarma", "category": "Food", "date": "2022-03-09T23:59:00+01:00" },
    { "amount": 1.8, "name": "Breakfast", "category": "Food", "date": "2022-03-10T12:10:54+01:00" },
    { "amount": 8.8, "name": "Ramen", "category": "Food", "date": "2022-03-10T10:06:00+01:00" },
    { "amount": 3.4, "name": "Frozen Yogurt", "category": "Food", "date": "2022-03-10T10:38:00+01:00" },
    { "amount": 10.8, "name": "Lunch", "category": "Food", "date": "2022-03-11T12:23:00+01:00" },
    { "amount": 4.42, "name": "YouTube Premium", "category": "Subscription", "date": "2022-03-12T02:12:18+01:00" },
    { "amount": 22.68, "name": "Dia", "category": "Grocery", "date": "2022-03-12T14:10:57+01:00" },
    { "amount": 14.5, "name": "Dinner", "category": "Food", "date": "2022-03-12T19:54:00+01:00" },
    { "amount": 7, "name": "Drinks", "category": "Drinks", "date": "2022-03-12T22:49:00+01:00" },
    { "amount": 8, "name": "Starbucks", "category": "Food", "date": "2022-03-13T00:00:00+01:00" },
    { "amount": 15.1, "name": "Udon", "category": "Food", "date": "2022-03-13T15:53:00+01:00" },








{"amount":5.4,"name":"Starbucks","category":"Food","date":"2022-03-14T15:28:37+01:00"},


{"amount":1.8,"name":"Snack","category":"Food","date":"2022-03-14T17:44:25+01:00"},

]