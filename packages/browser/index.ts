import MyPanel from '@/component/panel';
import Sidebar from '@/component/sidebar';
import SceneView from '@/component/scene';

import { defineComponent } from '@/utils/dom';

defineComponent("scene-view", SceneView);
defineComponent("sidebar-list", Sidebar);
defineComponent("panel-element", MyPanel);

