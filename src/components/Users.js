import React, { Component } from "react";
import User from "./User";
import Card from "./Card";

export class Users extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [
				{
					login: "huzeyfetas",
					id: 49512381,
					avatar_url: "https://avatars0.githubusercontent.com/u/49512381?v=4",
					url: "https://api.github.com/users/huzeyfetas",
					html_url: "https://github.com/huzeyfetas",

					name: "Hüzeyfe TAŞ",
					company: "Erciyes University",
					blog: "https://www.linkedin.com/in/h%C3%BCzeyfe-ta%C5%9F-a70265183/",
					location: null,
					email: null,
					bio: "React & React Native Enthusiast \r\nhuzeyfetas@outlook.com",
					public_repos: 9,
					public_gists: 0,
					followers: 3,
					following: 34,
				},
				{
					login: "dashersw",
					id: 698308,
					avatar_url: "https://avatars2.githubusercontent.com/u/698308?v=4",
					url: "https://api.github.com/users/dashersw",
					html_url: "https://github.com/dashersw",

					name: "Armagan Amcalar",
					company: null,
					blog: "http://arm.ag",
					location: "Berlin",
					email: null,
					bio:
						"Software architect, leader, lecturer, public speaker, mentor, entrepreneur, JS evangelist, electronics engineer, guitarist, singer, radio host.",
					public_repos: 170,
					public_gists: 22,
					followers: 1374,
					following: 4,
				},
				{
					login: "gaearon",
					id: 810438,
					avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
					url: "https://api.github.com/users/gaearon",
					html_url: "https://github.com/gaearon",

					name: "Dan Abramov",
					company: "@facebook ",
					blog: "http://twitter.com/dan_abramov",
					location: null,
					email: null,
					bio:
						"Working on @reactjs. Co-author of Redux and Create React App. Building tools for humans.",
					public_repos: 247,
					public_gists: 71,
					followers: 59902,
					following: 171,
				},
				{
					login: "ozcanzaferayan",
					id: 1326963,
					avatar_url: "https://avatars3.githubusercontent.com/u/1326963?v=4",
					url: "https://api.github.com/users/ozcanzaferayan",
					html_url: "https://github.com/ozcanzaferayan",

					name: "Özcan Zafer AYAN",
					company: null,
					blog: "https://twitter.com/ZaferAyan",
					location: "Türkiye",
					email: null,
					bio: null,
					public_repos: 95,
					public_gists: 190,
					followers: 371,
					following: 40,
				},
				{
					login: "huzeyfetas",
					id: 49512381,
					avatar_url: "https://avatars0.githubusercontent.com/u/49512381?v=4",
					url: "https://api.github.com/users/huzeyfetas",
					html_url: "https://github.com/huzeyfetas",

					name: "Hüzeyfe TAŞ",
					company: "Erciyes University",
					blog: "https://www.linkedin.com/in/h%C3%BCzeyfe-ta%C5%9F-a70265183/",
					location: null,
					email: null,
					bio: "React & React Native Enthusiast \r\nhuzeyfetas@outlook.com",
					public_repos: 9,
					public_gists: 0,
					followers: 3,
					following: 34,
				},
				{
					login: "dashersw",
					id: 698308,
					avatar_url: "https://avatars2.githubusercontent.com/u/698308?v=4",
					url: "https://api.github.com/users/dashersw",
					html_url: "https://github.com/dashersw",

					name: "Armagan Amcalar",
					company: null,
					blog: "http://arm.ag",
					location: "Berlin",
					email: null,
					bio:
						"Software architect, leader, lecturer, public speaker, mentor, entrepreneur, JS evangelist, electronics engineer, guitarist, singer, radio host.",
					public_repos: 170,
					public_gists: 22,
					followers: 1374,
					following: 4,
				},
				{
					login: "gaearon",
					id: 810438,
					avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
					url: "https://api.github.com/users/gaearon",
					html_url: "https://github.com/gaearon",

					name: "Dan Abramov",
					company: "@facebook ",
					blog: "http://twitter.com/dan_abramov",
					location: null,
					email: null,
					bio:
						"Working on @reactjs. Co-author of Redux and Create React App. Building tools for humans.",
					public_repos: 247,
					public_gists: 71,
					followers: 59902,
					following: 171,
				},
				{
					login: "ozcanzaferayan",
					id: 1326963,
					avatar_url: "https://avatars3.githubusercontent.com/u/1326963?v=4",
					url: "https://api.github.com/users/ozcanzaferayan",
					html_url: "https://github.com/ozcanzaferayan",

					name: "Özcan Zafer AYAN",
					company: null,
					blog: "https://twitter.com/ZaferAyan",
					location: "Türkiye",
					email: null,
					bio: null,
					public_repos: 95,
					public_gists: 190,
					followers: 371,
					following: 40,
				},
				{
					login: "huzeyfetas",
					id: 49512381,
					avatar_url: "https://avatars0.githubusercontent.com/u/49512381?v=4",
					url: "https://api.github.com/users/huzeyfetas",
					html_url: "https://github.com/huzeyfetas",

					name: "Hüzeyfe TAŞ",
					company: "Erciyes University",
					blog: "https://www.linkedin.com/in/h%C3%BCzeyfe-ta%C5%9F-a70265183/",
					location: null,
					email: null,
					bio: "React & React Native Enthusiast \r\nhuzeyfetas@outlook.com",
					public_repos: 9,
					public_gists: 0,
					followers: 3,
					following: 34,
				},
				{
					login: "dashersw",
					id: 698308,
					avatar_url: "https://avatars2.githubusercontent.com/u/698308?v=4",
					url: "https://api.github.com/users/dashersw",
					html_url: "https://github.com/dashersw",

					name: "Armagan Amcalar",
					company: null,
					blog: "http://arm.ag",
					location: "Berlin",
					email: null,
					bio:
						"Software architect, leader, lecturer, public speaker, mentor, entrepreneur, JS evangelist, electronics engineer, guitarist, singer, radio host.",
					public_repos: 170,
					public_gists: 22,
					followers: 1374,
					following: 4,
				},
				{
					login: "gaearon",
					id: 810438,
					avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
					url: "https://api.github.com/users/gaearon",
					html_url: "https://github.com/gaearon",

					name: "Dan Abramov",
					company: "@facebook ",
					blog: "http://twitter.com/dan_abramov",
					location: null,
					email: null,
					bio:
						"Working on @reactjs. Co-author of Redux and Create React App. Building tools for humans.",
					public_repos: 247,
					public_gists: 71,
					followers: 59902,
					following: 171,
				},
				{
					login: "ozcanzaferayan",
					id: 1326963,
					avatar_url: "https://avatars3.githubusercontent.com/u/1326963?v=4",
					url: "https://api.github.com/users/ozcanzaferayan",
					html_url: "https://github.com/ozcanzaferayan",

					name: "Özcan Zafer AYAN",
					company: null,
					blog: "https://twitter.com/ZaferAyan",
					location: "Türkiye",
					email: null,
					bio: null,
					public_repos: 95,
					public_gists: 190,
					followers: 371,
					following: 40,
				},
			],
		};
	}
	render() {
		return (
			<div className="container mt-3">
				<div className="row ">
					{this.state.users.map((user, index) => {
						return <Card key={index} user={user} />;
					})}
				</div>
			</div>
		);
	}
}

export default Users;
