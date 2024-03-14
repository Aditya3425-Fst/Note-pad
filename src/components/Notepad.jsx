import React from 'react'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import Styles from './Notepad.module.css'
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import IosShareIcon from '@mui/icons-material/IosShare';
import FiberNewTwoToneIcon from '@mui/icons-material/FiberNewTwoTone';
import DownloadingTwoToneIcon from '@mui/icons-material/DownloadingTwoTone';
import ContentCutTwoToneIcon from '@mui/icons-material/ContentCutTwoTone';
import ContentCopyTwoToneIcon from '@mui/icons-material/ContentCopyTwoTone';
import ContentPasteTwoToneIcon from '@mui/icons-material/ContentPasteTwoTone';
import UndoTwoToneIcon from '@mui/icons-material/UndoTwoTone';
import RedoTwoToneIcon from '@mui/icons-material/RedoTwoTone';
import ZoomInTwoToneIcon from '@mui/icons-material/ZoomInTwoTone';
import ZoomOutTwoToneIcon from '@mui/icons-material/ZoomOutTwoTone';
import HelpOutlineTwoToneIcon from '@mui/icons-material/HelpOutlineTwoTone';
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';
import SelectAllTwoToneIcon from '@mui/icons-material/SelectAllTwoTone';
import RoomPreferencesTwoToneIcon from '@mui/icons-material/RoomPreferencesTwoTone';
import FeedbackTwoToneIcon from '@mui/icons-material/FeedbackTwoTone';
import SaveAltTwoToneIcon from '@mui/icons-material/SaveAltTwoTone';
import LocalPrintshopTwoToneIcon from '@mui/icons-material/LocalPrintshopTwoTone';
import Notebook from './Notebook';
export default function Notepad() {
  return (
   <>
   <div id={Styles.big}>
     <div className={Styles.container}>
       {/* file */}
       <div>
         <div className={Styles.dropdown}>
           <button className=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
             File
           </button>
           <ul className="dropdown-menu" id={Styles.background}>
             <li><a className="dropdown-item" href="#"><InsertDriveFileIcon  />New</a></li>
             <li><a className="dropdown-item" href="#"><CreateNewFolderIcon />Open</a></li><hr/>
               <li><a className="dropdown-item" href="#"><SaveAltTwoToneIcon />Save</a></li>
               <li><a className="dropdown-item" href="#"><SaveAltTwoToneIcon />Save As...</a></li><hr/>
             <li><a className="dropdown-item" href="#"><IosShareIcon />Share</a></li>
               <li><a className="dropdown-item" href="#"><LocalPrintshopTwoToneIcon />Print</a></li>


           </ul>
         </div>
       </div>
     {/* Edit */}
        <div>
         <div className={Styles.dropdown}>
           <button className=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
             Edit
          </button>
             <ul className="dropdown-menu" id={Styles.background}>
               <li><a className="dropdown-item" href="#"><UndoTwoToneIcon style={{ color: 'black' }} />Undo</a></li>
               <li><a className="dropdown-item" href="#"><RedoTwoToneIcon />Redo</a></li><hr/>
               <li><a className="dropdown-item" href="#"><ContentCutTwoToneIcon />Cut</a></li>
               <li><a className="dropdown-item" href="#"><ContentCopyTwoToneIcon />Cut</a></li>
               <li><a className="dropdown-item" href="#"><ContentPasteTwoToneIcon />Cut</a></li><hr/>
               <li><a className="dropdown-item" href="#"><ClearTwoToneIcon />Cut</a></li>
               <li><a className="dropdown-item" href="#"><SelectAllTwoToneIcon />Cut</a></li>
          </ul>
         </div>
       </div>
       {/* View */}
       <div>
         <div className={Styles.dropdown}>
           <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
             View
          </button>
             <ul className="dropdown-menu" id={Styles.background}>
               <li><a className="dropdown-item" href="#"><ZoomInTwoToneIcon style={{ color: 'black' }} />Zoomin</a></li>
               <li><a className="dropdown-item" href="#"><ZoomOutTwoToneIcon />Zoomout</a></li><hr/>
               <li><a className="dropdown-item" href="#"><RoomPreferencesTwoToneIcon />Preferences</a></li>
           </ul>
         </div>
       </div>
          {/* help */}
       <div>
         <div className={Styles.dropdown}>
           <button className=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
             Help
             </button>
             <ul className="dropdown-menu" id={Styles.background}>
               <li><a className="dropdown-item" href="#"><HelpOutlineTwoToneIcon style={{ color: 'black' }} />Help</a></li>
               <li><a className="dropdown-item" href="#"><FeedbackTwoToneIcon />Send feedback</a></li>
          </ul>
         </div>
       </div>
      </div>
      <div className={Styles.iconStyles}>
         <FiberNewTwoToneIcon style={{ fontSize: '4vh' }} className={Styles.icon} />
         <DownloadingTwoToneIcon style={{ fontSize: '4vh' }} className={Styles.icon} />
         <ContentCutTwoToneIcon style={{ fontSize: '4vh' }} className={Styles.icon} />
         <ContentCopyTwoToneIcon style={{ fontSize: '4vh' }} className={Styles.icon} />
         <ContentPasteTwoToneIcon style={{ fontSize: '4vh' }} className={Styles.icon} />
         <UndoTwoToneIcon style={{ fontSize: '4vh' }} className={Styles.icon} />
         <RedoTwoToneIcon style={{ fontSize: '4vh' }} className={Styles.icon} />
         <ZoomInTwoToneIcon style={{ fontSize: '4vh' }} className={Styles.icon} />
         <ZoomOutTwoToneIcon style={{ fontSize: '4vh' }} className={Styles.icon} />
         <HelpOutlineTwoToneIcon style={{ fontSize: '4vh' }} className={Styles.icon} />
         </div>
     </div>
     <Notebook/>
   </>
 )
}








