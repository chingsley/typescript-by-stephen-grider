/// <reference types="@types/google.maps" />
import { CustomMap } from './CustomMap';
import { User } from './User';
import { Company } from './Company';

const user = new User();
const customMap = new CustomMap('map');
// customMap.addMarker(user.location);
customMap.addMarkerv2(user);

const company = new Company();
customMap.addMarkerv2(company);