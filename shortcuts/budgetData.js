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
    { "amount": 45.5, "name": "Bule Bule", "category": "Drinks", "date": "2022-03-05T23:59:00+01:00" },

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

    { "amount": 5.4, "name": "Starbucks", "category": "Food", "date": "2022-03-14T15:28:37+01:00" },
    { "amount": 1.8, "name": "Snack", "category": "Food", "date": "2022-03-14T17:44:25+01:00" },
    { "amount": 1.5, "name": "Beer", "category": "Drinks", "date": "2022-03-14T18:32:00+01:00" },
    { "amount": 7.49, "name": "KFC", "category": "Food", "date": "2022-03-15T12:37:00+01:00" },
    { "amount": 13, "name": "Fontana de Oro", "category": "Drinks", "date": "2022-03-15T20:34:00+01:00" },
    { "amount": 6.5, "name": "Shawarma", "category": "Food", "date": "2022-03-15T23:08:00+01:00" },
    { "amount": 3, "name": "Breakfast", "category": "Food", "date": "2022-03-16T10:23:00+01:00" },
    { "amount": 11.95, "name": "Dinner", "category": "Food", "date": "2022-03-16T19:39:48+01:00" },
    { "amount": 4.15, "name": "Beer", "category": "Drinks", "date": "2022-03-16T19:39:59+01:00" },
    { "amount": 8, "name": "Lunch", "category": "Food", "date": "2022-03-17T14:29:00+01:00" },
    { "amount": 1.25, "name": "Beer", "category": "Drinks", "date": "2022-03-17T17:05:00+01:00" },
    { "amount": 15.84, "name": "Sushi", "category": "Food", "date": "2022-03-17T00:00:00+01:00" },
    { "amount": 11.5, "name": "Pres", "category": "Drinks", "date": "2022-03-17T22:00:00+01:00" },
    { "amount": 25, "name": "Teatro Kapital", "category": "Drinks", "date": "2022-03-17T23:59:00+01:00" },
    { "amount": 15, "name": "Dinner", "category": "Food", "date": "2022-03-18T22:02:00+01:00" },
    { "amount": 8, "name": "Pres", "category": "Drinks", "date": "2022-03-18T23:46:00+01:00" },
    { "amount": 26, "name": "Bule Bule", "category": "Drinks", "date": "2022-03-18T23:59:00+01:00" },
    { "amount": 11, "name": "Lunch", "category": "Food", "date": "2022-03-19T14:49:00+01:00" },
    { "amount": 21.15, "name": "Grocery", "category": "Grocery", "date": "2022-03-20T00:00:00+01:00" },
    { "amount": 17, "name": "El Clasico", "category": "Drinks", "date": "2022-03-20T20:50:00+01:00" },
    { "amount": 5.29, "name": "Jolibee", "category": "Food", "date": "2022-03-20T22:47:00+01:00" },

    { "amount": 1.5, "name": "Breakfast", "category": "Food", "date": "2022-03-22T10:43:24+01:00" },
    { "amount": 3, "name": "Lunch", "category": "Food", "date": "2022-03-22T13:53:00+01:00" },
    { "amount": 9.9, "name": "Dinner", "category": "Food", "date": "2022-03-22T21:21:00+01:00" },
    { "amount": 3, "name": "Beer", "category": "Drinks", "date": "2022-03-22T21:40:00+01:00" },
    { "amount": 0.45, "name": "Breakfast", "category": "Food", "date": "2022-03-23T10:19:00+01:00" },
    { "amount": 5.29, "name": "Jolibee", "category": "Food", "date": "2022-03-23T13:18:00+01:00" },
    { "amount": 23, "name": "Sushi", "category": "Food", "date": "2022-03-23T23:05:00+01:00" },
    { "amount": 2, "name": "Milkshake", "category": "Food", "date": "2022-03-23T23:48:00+01:00" },
    { "amount": 1, "name": "Breakfast", "category": "Food", "date": "2022-03-24T11:43:00+01:00" },
    { "amount": 1, "name": "Coffee", "category": "Food", "date": "2022-03-24T11:43:00+01:00" },
    { "amount": 5, "name": "Drinks", "category": "Drinks", "date": "2022-03-24T20:10:00+01:00" },
    { "amount": 24.8, "name": "Lunch", "category": "Food", "date": "2022-03-25T12:00:00+01:00" },
    { "amount": 5.8, "name": "Starbucks", "category": "Food", "date": "2022-03-26T15:36:00+01:00" },
    { "amount": 19.72, "name": "Booze", "category": "Grocery", "date": "2022-03-26T17:42:00+01:00" },
    { "amount": 7.49, "name": "Jolibee", "category": "Food", "date": "2022-03-26T18:22:00+01:00" },
    { "amount": 19.5, "name": "Bule Bule", "category": "Drinks", "date": "2022-03-26T23:59:00+01:00" },
    { "amount": 25.2, "name": "Lunch", "category": "Food", "date": "2022-03-27T16:16:00+01:00" },

    { "amount": 1.1, "name": "Breakfast", "category": "Food", "date": "2022-03-28T11:27:00+02:00" },
    { "amount": 9.95, "name": "Stick", "category": "Drinks", "date": "2022-03-28T15:07:00+02:00" },
    { "amount": 6.5, "name": "Dinner", "category": "Food", "date": "2022-03-28T23:11:00+02:00" },
    { "amount": 2, "name": "2", "category": "Drinks", "date": "2022-03-28T23:49:53+02:00" },
    { "amount": 17.7, "name": "Lunch", "category": "Food", "date": "2022-03-29T14:10:00+02:00" },
    { "amount": 3.95, "name": "Beer", "category": "Drinks", "date": "2022-03-29T17:07:00+02:00" },
    { "amount": 10.6, "name": "Lunch", "category": "Food", "date": "2022-03-30T12:22:00+02:00" },
    { "amount": 1.6, "name": "Coke", "category": "Food", "date": "2022-03-30T15:22:00+02:00" },
    { "amount": 4.15, "name": "Beer", "category": "Drinks", "date": "2022-03-30T18:08:00+02:00" },
    { "amount": 8.95, "name": "Dinner", "category": "Food", "date": "2022-03-30T19:16:00+02:00" },
    { "amount": 12.95, "name": "Lunch", "category": "Food", "date": "2022-04-03T14:31:00+02:00" },
    { "amount": 19.88, "name": "Dinner", "category": "Food", "date": "2022-04-03T21:35:00+02:00" },

    { "amount": 8.49, "name": "Dinner", "category": "Food", "date": "2022-04-04T16:51:00+02:00" },
    { "amount": 3, "name": "Breakfast", "category": "Food", "date": "2022-04-05T11:07:00+02:00" },
    { "amount": 14.25, "name": "Lunch", "category": "Food", "date": "2022-04-05T15:16:00+02:00" },
    { "amount": 15.93, "name": "Grocery", "category": "Grocery", "date": "2022-04-06T10:54:00+02:00" },
    { "amount": 10.9, "name": "Lunch", "category": "Food", "date": "2022-04-06T11:11:00+02:00" },
    { "amount": 1.2, "name": "Coffee", "category": "Food", "date": "2022-04-06T13:29:00+02:00" },
    { "amount": 5, "name": "Beer", "category": "Drinks", "date": "2022-04-06T22:15:00+02:00" },
    { "amount": 2.2, "name": "Breakfast", "category": "Food", "date": "2022-04-07T10:08:00+02:00" },

    // missing


    { "amount": 15.25, "name": "Lunch", "category": "Food", "date": "2022-04-08T15:28:00+02:00" },

    { "amount": 1.1, "name": "Breakfast", "category": "Food", "date": "2022-04-21T11:18:00+02:00" },


    // new start
    { "amount": 18.65, "name": "Lunch", "category": "Food", "date": "2022-04-26T14:11:00+02:00" },
    { "amount": 5.4, "name": "Coffee", "category": "Coffee", "date": "2022-04-26T16:29:00+02:00" },
    { "amount": 4.79, "name": "Dinner", "category": "Food", "date": "2022-04-26T20:08:00+02:00" },
    { "amount": 13.5, "name": "Game", "category": "Drinks", "date": "2022-04-26T21:13:00+02:00" },
    { "amount": 3.3, "name": "Coffee", "category": "Coffee", "date": "2022-04-27T11:35:00+02:00" },
    { "amount": 1.1, "name": "Lunch", "category": "Food", "date": "2022-04-27T12:51:00+02:00" },
    { "amount": 12.95, "name": "Dinner", "category": "Food", "date": "2022-04-27T18:10:00+02:00" },
    { "amount": 3.5, "name": "Sangria", "category": "Drinks", "date": "2022-04-27T18:13:00+02:00" },
    { "amount": 10, "name": "Icon", "category": "Drinks", "date": "2022-04-27T23:59:00+02:00" },
    { "amount": 18.52, "name": "Lunch", "category": "Food", "date": "2022-04-28T14:00:00+02:00" },
    { "amount": 17, "name": "Drinks", "category": "Drinks", "date": "2022-04-29T14:59:00+02:00" },
    { "amount": 17.07, "name": "Dinner", "category": "Food", "date": "2022-04-29T19:30:00+02:00" },
    { "amount": 45, "name": "BRESH", "category": "Drinks", "date": "2022-04-29T23:59:00+02:00" },
    { "amount": 2.9, "name": "McDonalds", "category": "Food", "date": "2022-04-29T11:59:00+02:00" },
    { "amount": 6.72, "name": "Grocery", "category": "Grocery", "date": "2022-04-30T17:00:00+02:00" },
    { "amount": 9.95, "name": "Lunch", "category": "Food", "date": "2022-04-30T16:13:00+02:00" },
    { "amount": 12.48, "name": "Dinner", "category": "Food", "date": "2022-04-30T21:55:00+02:00" },
    { "amount": 35, "name": "Bule Bule", "category": "Drinks", "date": "2022-04-30T23:59:00+02:00" },
    { "amount": 7.35, "name": "Lunch", "category": "Food", "date": "2022-05-01T14:21:00+02:00" },
    { "amount": 13.9, "name": "Dinner", "category": "Food", "date": "2022-05-01T20:45:00+02:00" },

    { "amount": 8.95, "name": "Lunch", "category": "Food", "date": "2022-05-02T13:21:00+02:00" },
    { "amount": 2.25, "name": "Coffee", "category": "Coffee", "date": "2022-05-02T15:19:00+02:00" },
    { "amount": 12.8, "name": "Sala Equis", "category": "Drinks", "date": "2022-05-02T22:13:00+02:00" },
    { "amount": 5.9, "name": "Dinner", "category": "Food", "date": "2022-05-02T23:59:00+02:00" },
    { "amount": 5.3, "name": "Tim Horton's", "category": "Coffee", "date": "2022-05-03T18:16:00+02:00" },
    { "amount": 5, "name": "Fontana de Oro", "category": "Drinks", "date": "2022-05-03T17:34:00+02:00" },
    { "amount": 4.79, "name": "Jolibee", "category": "Food", "date": "2022-05-03T23:11:00+02:00" },
    { "amount": 1.6, "name": "Breakfast", "category": "Food", "date": "2022-05-04T13:37:00+02:00" },
    { "amount": 1.15, "name": "Coffee", "category": "Coffee", "date": "2022-05-04T15:53:00+02:00" },

    { "amount": 1.1, "name": "Breakfast", "category": "Food", "date": "2022-05-10T11:49:00+02:00" },
    { "amount": 4, "name": "100 Montaditos", "category": "Drinks", "date": "2022-05-10T17:05:00+02:00" },
    { "amount": 20, "name": "Fair", "category": "Food", "date": "2022-05-10T20:00:00+02:00" },
    { "amount": 3.8, "name": "Breakfast", "category": "Food", "date": "2022-05-11T11:26:00+02:00" },
    { "amount": 2.3, "name": "Snack", "category": "Food", "date": "2022-05-11T12:47:00+02:00" },
    { "amount": 7, "name": "Drinks", "category": "Drinks", "date": "2022-05-11T14:00:00+02:00" },
    { "amount": 42.18, "name": "Grocery", "category": "Grocery", "date": "2022-05-11T21:50:00+02:00" },


    { "amount": 32.5, "name": "Game", "category": "Other", "date": "2022-05-12T21:30:00+02:00" },


    { "amount": 12.8, "name": "Lunch", "category": "Food", "date": "2022-05-16T14:19:00+02:00" },
    { "amount": 13.9, "name": "Dinner", "category": "Food", "date": "2022-05-16T19:44:00+02:00" },







































]