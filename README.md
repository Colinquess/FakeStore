<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- FakeStore LOGO -->
<br />
<div align="center">
  <a href="https://fakestoreapi.com/">
    <img src="https://fakestoreapi.com/icons/logo.png" alt="Logo" width="240" height="240">
  </a>

  <p align="center">
    FakeStoreAPI is as free service to use in your project for testing purposes.
  </p>
</div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Colinquess/FakeStore">
    <img src="https://img.shields.io/badge/FakeStoreSample-0000FF?style=for-the-badge&logo=FakeStoreSample&logoColor=white" alt="Logo" width="434" height="80">
  </a>

  <p align="center">
    This project was make as a sample to showcase my React Native and TypeScript skills.
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#tree-structure">Tree Structure</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

[![product-screenshot-1]][product-screenshot-1]
[![product-screenshot-2]][product-screenshot-2]

This project was make as a sample to showcase my React Native and TypeScript skills.

It uses the [React Native](https://reactnative.dev/) framework with the [Expo](https://expo.dev/) app.

As backend supporting API, it uses the [FakeStoreAPI](https://fakestoreapi.com/)

For local storage, it uses the [AsyncStorage](https://reactnative.dev/docs/asyncstorage)

For navigation, it uses the [React Navigation](https://reactnavigation.org/)

For testing, it uses [Jest](https://jestjs.io/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![React][React.js]][React-url]
* [![React-Native][React-native]][React-native-url]
* [![Expo][Expo]][Expo-url]
* [![TypeScript][TypeScript]][TypeScript-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Tree Structure -->
### Tree Structure
<pre>
.
├── app
│   ├── src
│   │   ├── assets
│   │   │   ├── screenshots
│   │   │   │   ├── Project-Screenshot-1.jpeg
│   │   │   │   └── Project-Screenshot-2.jpeg
│   │   │   └── shopping.svg
│   │   ├── common
│   │   │   ├── shelfItem.tsx
│   │   │   └── storageDealers.tsx
│   │   ├── components
│   │   │   ├── categoriesMenu
│   │   │   │   ├── categorieItem.tsx
│   │   │   │   └── index.tsx
│   │   │   ├── checkoutList
│   │   │   │   └── index.tsx
│   │   │   └── itemShelf
│   │   │       └── index.tsx
│   │   └── pages
│   │       ├── checkout
│   │       │   └── index.tsx
│   │       └── shopping
│   │           └── index.tsx
│   └── __tests__
│       └── snapshot.tests.tsx
├── app.json
├── App.tsx
├── babel.config.js
├── Gemfile
├── index.js
├── LICENSE
├── metro.config.js
├── package.json
├── README.md
├── rn-cli.config.js
├── tsconfig.json
└── yarn.lock
</pre>


<!-- GETTING STARTED -->
## Getting Started

The project itself is very simple, it uses mostly deffault libraries.

### Prerequisites

To run the project just run the following commands in your terminal.

* yarn install
* yarn expo

Then run Expo Go app in your phone and scan the QR code.

Testing:
* yarn test

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Your Name - [@josecolinques](https://colinquess.github.io/) - josecolinques@gmail.com

Project Link: [https://github.com/Colinquess/FakeStore](https://github.com/Colinquess/FakeStore)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[product-screenshot-1]: app/src/assets/screenshots/Project-Screenshot-1.jpeg
[product-screenshot-2]: app/src/assets/screenshots/Project-Screenshot-2.jpeg
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[React-native]: https://img.shields.io/badge/React-Native-000000?style=for-the-badge&logo=react&logoColor=61DAFB
[React-native-url]: https://reactnative.dev/
[Expo]: https://img.shields.io/badge/Expo-000000?style=for-the-badge&logo=expo&logoColor=white
[Expo-url]: https://expo.io/
[TypeScript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/

[FakeStoreSample-img]: https://img.shields.io/badge/FakeStoreSample-0000FF?style=for-the-badge&logo=FakeStoreSample&logoColor=white
[FakeStoreSample-url]: https://github.com/Colinquess/FakeStore

[FakeStore]: https://fakestoreapi.com/icons/logo.png
[FakeStore-url]: https://fakestoreapi.com/


[contributors-shield]: https://img.shields.io/github/contributors/Colinquess/FakeStore.svg?style=for-the-badge
[contributors-url]: https://github.com/Colinquess/FakeStore/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Colinquess/FakeStore.svg?style=for-the-badge
[forks-url]: https://github.com/Colinquess/FakeStore/network/members
[stars-shield]: https://img.shields.io/github/stars/Colinquess/FakeStore.svg?style=for-the-badge
[stars-url]: https://github.com/Colinquess/FakeStore/stargazers
[issues-shield]: https://img.shields.io/github/issues/Colinquess/FakeStore.svg?style=for-the-badge
[issues-url]: https://github.com/Colinquess/FakeStore/issues
[license-shield]: https://img.shields.io/github/license/Colinquess/FakeStore.svg?style=for-the-badge
[license-url]: https://github.com/Colinquess/FakeStore/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/jose-colinques

