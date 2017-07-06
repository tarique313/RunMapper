import { IActivity } from '../shared/activity.model';

export const SAVED_ACTIVITIES: IActivity[] = [
	{
		"id": 1,
		"name": "Main Bike Trails",
		"date": new Date('04/07/2017'),
		"distance": 6.2,
		"comments": "Nice day!",
		"gpxData": '../../assets/gpx/1.gpx'

	},
	{
		"id": 2,
		"name": "Cycle Rides",
		"date": new Date('05/07/2017'),
		"distance": 7.2,
		"comments": "great day!",
		"gpxData": '../../assets/gpx/2.gpx'

	},

	{
		"id": 3,
		"name": "Bus Trails",
		"date": new Date('06/07/2017'),
		"distance": 8.2,
		"comments": "What a day!",
		"gpxData": '../../assets/gpx/3.gpx'

	},
	{
		"id": 4,
		"name": "Train rides",
		"date": new Date('07/07/2017'),
		"distance": 6.2,
		"comments": "Awsome day!",
		"gpxData": '../../assets/gpx/4.gpx'

	},


]
