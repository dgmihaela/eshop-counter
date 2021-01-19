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

const Schema = yup.object().shape({
    costType: yup.array(yup.object({ value: yup.string() })).required('Select a type').nullable(),
    costName: yup
      .number()
      .test('lenght', 'Must be 2 characters', val => val.toString().length >= 2)
      .test('lenght1', 'Must be <12 characters', val => val.toString().length < 12)
      .min(10, "Min is 10")
      .max(88, 'Max is 88')
      .typeError('Amount must be a number')
      .required(),
    costDetails: yup.string().required('Must enter a value'),
    rueValue: yup.string().matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        'Enter correct url!'
    ).required('Please enter website'),
    type1: yup.array(yup.object({ value: yup.string() })).required('Select a type').nullable(),
    type2: yup.array(yup.object({ value: yup.string() })).required('Select a type').nullable(),
    type3: yup.array(yup.object({ value: yup.string() })).required('Select a type').nullable(),
    type4: yup.array(yup.object({ value: yup.string() })).required('Select a type').nullable(),
    adaugProdus: yup.string().required()
  });

export default ({ nestIndex, control, register }) => {
   
    const {  errors } = useForm({
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
            {groupFields.map(({id}, item, index) => {
                return(
                    <div key={id}>
                        <div className='pb-2'>
                            <Controller
                                as={ReactSelect}
                                defaultValue={allSomeOptions[0]}
                                //defaultValue={item.type1}
                                options={allSomeOptions}
                                className="selectionGroup-select mr-4 text-black border p-1 rounded w-1/4"
                                refs={register()}
                                name={`itemsGroup[${nestIndex}].nestedArray[${index}].type1`}
                                control={control}
                                isClearable
                            />
                            {errors.type1 && <p style={{ color: "red", marginTop: ".5rem" }}>{errors.type1.message}</p>}
                            <Controller
                                as={ReactSelect}
                                defaultValue={trueFalseOptions[0]}
                                //defaultValue={item.type2}
                                options={trueFalseOptions}
                                className="selectionGroup-select mr-4 text-black border p-1 rounded w-1/4"
                                refs={register()}
                                control={control}
                                isClearable
                                name={`itemsGroup[${nestIndex}].nestedArray[${index}].type2`}
                            />
                            {errors.type2 && <p style={{ color: "red", marginTop: ".5rem" }}>{errors.type2.message}</p>}
                        </div>
                        <div className='pb-2'>
                            <Controller
                                as={ReactSelect}
                                defaultValue={categoryOptions[0]}
                                //defaultValue={item.type3}
                                options={categoryOptions}
                                className="selectionGroup-select mr-4 text-black border p-1 rounded w-1/4"
                                refs={register()}
                                control={control}
                                isClearable
                                name={`itemsGroup[${nestIndex}].nestedArray[${index}].type3`}
                            />
                            {errors.type3 && <p style={{ color: "red", marginTop: ".5rem" }}>{errors.type3.message}</p>}
                            <Controller
                                as={ReactSelect}
                                defaultValue={oneManyOptions[0]}
                                //defaultValue={item.type4}
                                options={oneManyOptions}
                                className="selectionGroup-select text-black border p-1 rounded w-1/4"
                                refs={register()}
                                name="type4"
                                control={control}
                                isClearable
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
                    type1: 'type1',
                    type2: 'type2',
                    type3: 'type3',
                    type4: 'type4',
                    adaugProdus: 'adaugProdus'
                })} className="add-new-section-group-btn text-black border p-1 rounded ml-56 float-right" type="button">
                    Add
                </button>
                <button onClick={() => groupRemove({})} className="add-new-section-group-btn text-black border p-1 rounded ml-56 float-right" type="button">
                    Remove
                </button>
            </section>
        </div>
      );
    };