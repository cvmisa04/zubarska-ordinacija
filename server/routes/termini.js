import express from 'express'
import {createTerm,getTermin, remove,allTermini} from '../controllers/termini'

const router  = express.Router();


router.route('/create-term').post(createTerm);
router.route('/termin').get(getTermin);
router.route('/termin/:id').delete(remove);
router.route('/termini').get(allTermini);


module.exports=router
