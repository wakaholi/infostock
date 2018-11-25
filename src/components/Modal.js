import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import {ModalContent} from './ModalContents';

export class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  };

  selectContents = event => {
    this.setState({content: event.target.value})

  }

  render () {
    return <Dialog
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
      open={this.props.open}
      onClose={this.props.closeModal}
     >
       <DialogTitle id="scroll-dialog-title">メモの種類を選択して情報を選択</DialogTitle>
       <DialogContent>
         <form autoComplete="off">
           <FormControl style={{minWidth: 120}}>
             <InputLabel htmlFor="content">content</InputLabel>
             <Select
               value={this.state.content}
               onChange={this.selectContents}
               inputProps={{
                 name: 'content',
                 id: 'content',
               }}
             >
               <MenuItem value="">
                 <em>None</em>
               </MenuItem>
               <MenuItem value={"Text"}>Text</MenuItem>
               <MenuItem value={"url"}>URL</MenuItem>
               <MenuItem value={"Qiita"}>Qiita</MenuItem>
             </Select>
             <ModalContent content={this.state.content} modalTextHandle={this.props.modalTextHandle} text={this.props.text} urlText={this.props.urlText} url={this.props.url} qiita={this.props.qiita}/>
           </FormControl>
         </form>
      </DialogContent>
     </Dialog>
  }
}
