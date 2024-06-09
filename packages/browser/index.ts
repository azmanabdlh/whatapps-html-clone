import MyPanel from '@/component/panel';
import Sidebar from '@/component/sidebar';
import SceneView from '@/component/scene';


function loaded() {
  new Sidebar();
  new SceneView();
  new MyPanel();
}

document.addEventListener("DOMContentLoaded", loaded);
