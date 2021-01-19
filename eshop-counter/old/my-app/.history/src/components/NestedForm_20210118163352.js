import React from "react";
import { useForm, Controller, useFieldArray, useWatch  } from "react-hook-form";
import ReactSelect from "react-select";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const allSomeOptions = [
    {value: '', label: 'Select all/one'},
    {value: 'All', label: 'All'},
    {value: 'Some', label: 'Some'},
];
const trueFalseOptions = [
    {value: '', label: 'Select true/false'},
    {value: 'True', label: 'True'},
    {value: 'False', label: 'False'},
];

const categoryOptions = [
    {value: '', label: 'Select category'},
    {value: 'Category1', label: 'Category1'},
    {value: 'Category2', label: 'Category2'},
];

const oneManyOptions = [
    {value: '', label: 'Select one/many'},
    {value: 'One', label: 'One'},
    {value: 'Many', label: 'Many'},
]

export default ({ nestIndex, control, register }) => {
    const { fields, remove, append } = useFieldArray({
      control,
      name: `itemsGroup[${nestIndex}].nestedArray`
    });

    const { register, handleSubmit, control, errors } = useForm({
        mode: "onBlur",
        reValidateMode: "onBlur",
        resolver: yupResolver(Schema)
      });

    
    const {
        fields: groupFields,
        append: groupAppend,
        remove: groupRemove
      } = useFieldArray({ control, name: "itemsGroup" });

    return (
        <div>
         <section className="sectionGroup border-dotted border-2 ring-black p-4 my-4 overflow-auto">
            {groupFields.map( ({id}, index) => {
            return(
                <div key={id}>
                    <div className='pb-2'>
                        <Controller
                            as={ReactSelect}
                            defaultValue={allSomeOptions[0]}
                            options={allSomeOptions}
                            className="selectionGroup-select mr-4 text-black border p-1 rounded w-1/4"
                            ref={register()}
                            name={`itemsGroup[${nestIndex}].nestedArray[${index}].type1`}
                            control={control}
                            isClearable
                            isMulti
                            
                        />
                        {errors.type1 && <p style={{ color: "red", marginTop: ".5rem" }}>{errors.type1.message}</p>}
                        <Controller
                            as={ReactSelect}
                            defaultValue={trueFalseOptions[0]}
                            options={trueFalseOptions}
                            className="selectionGroup-select mr-4 text-black border p-1 rounded w-1/4"
                            ref={register()}
                            
                            control={control}
                            isClearable
                            isMulti
                            name={`itemsGroup[${nestIndex}].nestedArray[${index}].type2`}
                        />
                        {errors.type2 && <p style={{ color: "red", marginTop: ".5rem" }}>{errors.type2.message}</p>}
                    </div>
                    <div className='pb-2'>
                        <Controller
                            as={ReactSelect}
                            defaultValue={categoryOptions[0]}
                            options={categoryOptions}
                            className="selectionGroup-select mr-4 text-black border p-1 rounded w-1/4"
                            ref={register()}
                            control={control}
                            isClearable
                            isMulti
                            name={`itemsGroup[${nestIndex}].nestedArray[${index}].type3`}
                        />
                        {errors.type3 && <p style={{ color: "red", marginTop: ".5rem" }}>{errors.type3.message}</p>}
                        <Controller
                            as={ReactSelect}
                            defaultValue={oneManyOptions[0]}
                            options={oneManyOptions}
                            className="selectionGroup-select text-black border p-1 rounded w-1/4"
                            ref={register()}
                            name="type4"
                            control={control}
                            isClearable
                            isMulti
                            name={`itemsGroup[${nestIndex}].nestedArray[${index}].type4`}
                        />
                        {errors.type4 && <p style={{ color: "red", marginTop: ".5rem" }}>{errors.type4.message}</p>}
                        <input
                            className='text-black border p-1 rounded'
                            ref={register()}name="adaugProdus"
                            placeholder="Adauga produs"
                            className='ml-4'
                            name={`itemsGroup[${nestIndex}].nestedArray[${index}].adaugProdus`}
                         
                        />
                        {errors.adaugProdus && <p style={{ color: "red", marginTop: ".5rem" }}>{errors.adaugProdus.message}</p>}
                    </div>
                
                </div>
                )
            })}
                <button onClick={() => groupAppend({
                    type1: type1,
                    type2: type2,
                    type3: type3,
                    type4: type4,
                    adaugProdus: adaugProdus
                })} className="add-new-section-group-btn text-black border p-1 rounded ml-56 float-right" type="button">
                    Add
                </button>
                <button onClick={() => groupRemove({index})} className="add-new-section-group-btn text-black border p-1 rounded ml-56 float-right" type="button">
                    Remove
                </button>
            </section>
        </div>
      );
    };