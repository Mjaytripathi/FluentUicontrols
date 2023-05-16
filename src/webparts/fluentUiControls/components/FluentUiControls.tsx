import * as React from 'react';
import styles from './FluentUiControls.module.scss';
import { IFluentUiControlsProps } from './IFluentUiControlsProps';
import { Checkbox, ChoiceGroup, ComboBox, Dropdown, IStackTokens, Label, PrimaryButton, SearchBox, Slider, Stack, TextField, Toggle,  } from '@fluentui/react';
import { IIconProps } from '@fluentui/react/lib/Icon';
const stackToken:IStackTokens={
  childrenGap:20
}
const stackTokens:IStackTokens={
  childrenGap:10
}
const filterIcon: IIconProps = { iconName: 'Filter' };

export default class FluentUiControls extends React.Component<IFluentUiControlsProps, {}> {
  public render(): React.ReactElement<IFluentUiControlsProps> {
  
    return (
     <>
     <Stack tokens={stackToken}>
     <h1 className={styles.h1}>Fluent Ui controls</h1>
     <SearchBox placeholder="Search Here..."/>
     <form>
      <Label required>First Name:</Label>
      <TextField/>
      <Label required>Last Name:</Label>
      <TextField/>
      <Label required>Description:</Label>
      <TextField multiline/>
      <Dropdown placeholder='Select an option..' 
      label='Single Selected Dropdown'
      options={[
        {key:"A",text:"Option A"},
        {key:"B",text:"Option B"},
        {key:"C",text:"Option C"}

      ]}
      />
       <Dropdown placeholder='Select an option..' 
      label='Multi Selected Dropdown'
      options={[
        {key:"A",text:"Option A"},
        {key:"B",text:"Option B",disabled:true},
        {key:"C",text:"Option C"}

      ]}
      multiSelect
      />
       <Dropdown placeholder='Select an option..' 
      label='Default Selected Dropdown'
      options={[
        {key:"A",text:"Option A"},
        {key:"B",text:"Option B",disabled:true},
        {key:"C",text:"Option C"}

      ]}
      multiSelect
      defaultSelectedKeys={["A","C"]}
      />
      <ComboBox placeholder='Select an option..' 
      label='Single Selected Dropdown'
      options={[
        {key:"A",text:"Option A"},
        {key:"B",text:"Option B"},
        {key:"C",text:"Option C"}

      ]}
      allowFreeInput
      autoComplete='on'
      />
<SearchBox placeholder="Filter..."  iconProps={filterIcon} />

      <ChoiceGroup label="Radio Buttons" styles={{ flexContainer: { display: "flex" } }}
      options={[
        {key:"A",text:"Option A"},
        {key:"B",text:"Option B",disabled:true},
        {key:"C",text:"Option C",}

      ]} 
      defaultSelectedKey="C"/>
      <Label>Fruits:</Label>
<Stack tokens={stackTokens}>
      <Checkbox label="Apple"/>
      <Checkbox label="Mango"/>
      <Checkbox label="Grapes"/>
      <Checkbox label="Papaya"/>
      <Checkbox label="Orange"/>
      </Stack>
      <Slider min={1} max={100} label="Slider"/>
      <Toggle onText='ON' offText='OFF'/>
      <Toggle onText='ON' offText='OFF' disabled/>
      <Toggle onText='ON' offText='OFF' defaultChecked/>

      <button>Save Me</button>
      <PrimaryButton text="Primary Button" style={{backgroundColor:"red",color:"white"}}/>
     </form>
    
     </Stack>
     <h1>Just check</h1>
     </>
     
    );
  }
}
