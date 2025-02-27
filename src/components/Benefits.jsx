// // eslint-disable-next-line no-unused-vars
// import * as React from 'react';
// import AccordionGroup from '@mui/joy/AccordionGroup';
// import Accordion from '@mui/joy/Accordion';
// // eslint-disable-next-line no-unused-vars
// import AccordionDetails, {
//   accordionDetailsClasses,
// } from '@mui/joy/AccordionDetails';
// import AccordionSummary, {
//   accordionSummaryClasses,
// } from '@mui/joy/AccordionSummary';

// import Typography from '@mui/joy/Typography';
// import Avatar from '@mui/joy/Avatar';
// import ListItemContent from '@mui/joy/ListItemContent';

// import TapAndPlayRoundedIcon from '@mui/icons-material/TapAndPlayRounded';
// import EditNotificationsRoundedIcon from '@mui/icons-material/EditNotificationsRounded';
// import AccessibilityNewRoundedIcon from '@mui/icons-material/AccessibilityNewRounded';

// export default function Benefits() {
//   return (
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         textAlign: 'center',
//       }}
//     >
//       <AccordionGroup
//         variant="plain"
//         transition="0.2s"
//         sx={{
//           maxWidth: 400,
//           borderRadius: 'md',
//           [`& .${accordionDetailsClasses.content}.${accordionDetailsClasses.expanded}`]: {
//             paddingBlock: '1rem',
//           },
//           [`& .${accordionSummaryClasses.button}`]: {
//             paddingBlock: '1rem',
//           },
//         }}
//       >
//         <Accordion>
//           <AccordionSummary indicator={false}>
//             <Avatar color="primary">
//               <TapAndPlayRoundedIcon />
//             </Avatar>
//             <ListItemContent>
//               <Typography level="title-md">Mantente Conectado</Typography>
//               <Typography level="body-sm">
//                 Tienes acceso a tu información desde cualquier dispositivo
//               </Typography>
//             </ListItemContent>
//           </AccordionSummary>
//         </Accordion>

//         <Accordion>
//           <AccordionSummary indicator={false}>
//             <Avatar color="success">
//               <EditNotificationsRoundedIcon />
//             </Avatar>
//             <ListItemContent>
//               <Typography level="title-md">Notificaciones</Typography>
//               <Typography level="body-sm">
//                 Recibe notificaciones sobre tu inventario en tiempo real
//               </Typography>
//             </ListItemContent>
//           </AccordionSummary>
//         </Accordion>

//         <Accordion>
//           <AccordionSummary indicator={false}>
//             <Avatar color="danger">
//               <AccessibilityNewRoundedIcon />
//             </Avatar>
//             <ListItemContent>
//               <Typography level="title-md">Accesibilidad</Typography>
//               <Typography level="body-sm">
//                 No tendrás ningún problema con las funcionalidades de la aplicación
//               </Typography>
//             </ListItemContent>
//           </AccordionSummary>
//         </Accordion>
//       </AccordionGroup>
//     </div>
//   );
// }
