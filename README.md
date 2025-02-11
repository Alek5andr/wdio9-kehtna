# WebdriverIO 9
Demo tests for the purpose of study Test Automation in [Kehtna](https://www.kehtna.edu.ee/etKehtna) school.

## Study plan
1. Theory
   <br>1.1. Speak why test automation is useful?
   <br>1.2. Test automation pyramid
2. WebdriverIO https://webdriver.io/docs/gettingstarted
   <br>2.1. Install WebdriverIO
   <br>2.2. Run automatically generated test
   <br>2.3. WebdriverIO Chrome Recorder https://webdriver.io/docs/record -> Record - Replay
   <br>2.4. Export WDIO test: extract as WebdriverIO Test -> put in a project
   <br>2.5. Run single test "--spec"
   <br>2.6. Explain selectors https://webdriver.io/docs/selectors/
   <br>&nbsp;&nbsp;2.6.1. Fix selectors (task 3): menus with sub-menus https://www.w3schools.com/cssref/css_selectors.php
   <br>2.7. Refactor
   <br>&nbsp;&nbsp;2.7.1. Array of elements of common selector -> .desktop-menu>ul>li>a[class="special"]
   <br>&nbsp;&nbsp;2.7.2. Tasks 1 & 2: https://webdriver.io/docs/api
   <br>2.8. Make it test: add expectations for all menus -> .desktop-menu>ul>li
   <br>&nbsp;&nbsp;2.8.1. Discuss how to refactor -> Refactor the test
   <br>2.9. Make it test menus with sub-menus -> .desktop-menu a[class=" mainOverride"]
   <br>2.10. Introduce suites
   <br>&nbsp;&nbsp;2.10.1. Run "main-menus" suite
   <br>&nbsp;&nbsp;2.10.2. Task 4: Run "sub-menus" suite
   <br>2.11. Tasks 5, 6, 7
   <br>&nbsp;&nbsp;2.11.1. Sub-menus correspond to literal expectations
