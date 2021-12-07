import log from '../../Component/Asset/images/log.png';
import log2 from '../../Component/Asset/images/log2.png';
import log3 from '../../Component/Asset/images/log3.jpg';
import scan from '../../Component/Asset/images/scan.png';
import { PermissionsAndroid } from 'react-native';
import Contacts from 'react-native-contacts';
export const image={
log,
log2,
log3,
scan,
}

export const colors={
    transparent: "rgba(0,0,0,0)",
    primary:'#000',
    secondary:'#F6C36A',
    in:'#5EA37C',
    third: "red",
};
export const units = [
    "Box",
    "Pack",
    "Pair",
    "Bag",
    "Pcs",
    "Cm",
    "Dz",
    "Ft",
    "Grams",
    "Kg",
    "Km",
    "Yard",
    "Portion",
    "Bowl",
    "Bottle",
    "Carton",
  ];

  export const contacts=()=>{
    PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          'title': 'Contacts',
          'message': 'This app would like to view your contacts.',
          'buttonPositive': 'Accept'
        }
      )
        .then(Contacts.getAll()
          .then((contacts) => {
              // work with contacts
                console.log(contacts)
              })
                .catch((e) => {
                    console.log(e)
                }))
  }