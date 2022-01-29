
import DockIcon from '@mui/icons-material/Dock';
import { Chip, InputLabel, Switch, TableCell, TableRow, Typography } from "@mui/material";
import MUIDataTable from "@xpamamadeus/mui-datatables";
import ExcelIcon from '../img/excel.svg';
import { CustomToolbar } from "./CustomToolbar";

export const AppDataGrid = () => {
    
    const getIcon = (index:number) => {
        const icons = [<DockIcon />, <ExcelIcon />, <DockIcon />]
        return icons[index];
    }

    const columns = [
        {

            label:"Product Name",
            name:"productname",
            options:{
                customBodyRender: (value: any, tableMeta: any, updateValue:any) => {
                    
                    return(<InputLabel >
                    {console.log(getIcon(tableMeta.rowIndex))}
                    <Typography variant="body1" style={{textTransform:"none"}}>{value}</Typography>
                    </InputLabel>)}
                
                
                
            }
        },
        {
            label:"Unit",
            name:"unit"
        },
        {
            label:"Last Stock",
            name:"stock",
            options:{
                customBodyRender: (value: any, tableMeta: any, updateValue:any) => 
                (<Chip label={`. ${value} days`} />)  
                
            }
        },
        {
            label:"Out of Stock",
            name:"isstockout",
            options:{
                customBodyRender: (value: any, tableMeta: any, updateValue:any) => 
                (<Switch checked={value} />
                    )  
                
            }
        }
    ];

const data = [
 {productname:"Product1", unit:21, stock:20, lastupdated:"2021-12-02", isstockout:false, location:"Hyderabad", vendor:"Abc"},
 {productname:"Product2", unit:11, stock:15, lastupdated:"2021-09-21", isstockout:false, location:"Bangalore", vendor:"Def"},
 {productname:"Product3", unit:15, stock:13, lastupdated:"2021-12-02", isstockout:true, location:"Chennai", vendor:"Abc"}
];

const handleClick = () =>  {
    alert('button clicked');
}

const options = {
  filter:false,
  search:false,
  download: false,
  print: false,
  viewColumns: false,
  title: false,
  expandableRows:true,
  renderExpandableRow: (rowData:any, rowMeta:any) => (
      <TableRow>
        <TableCell>
          {rowData.vendor}
        </TableCell>
      </TableRow>
    ),
  customToolbar: () => {
    return (
        <CustomToolbar />
    );
  }
};

return <MUIDataTable
    title={""}
  data={data}
  columns={columns}
  options={options}
/>
}