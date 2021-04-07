import {stack} from './src/resourcesStack';
import {pushElement} from './src/pushElement';
import {getElement} from './src/getElemernt';

const pushButton = document.getElementById("push-button");
const getButton = document.getElementById('get-button');

pushButton.addEventListener('onclick', pushElement(stack));
getButton.addEventListener('onclick', getElement(stack));