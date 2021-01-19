import React from "react";
import { useFieldArray } from "react-hook-form";

export default ({ nestIndex, control, register }) => {
    const { fields, remove, append } = useFieldArray({
      control,
      name: `test[${nestIndex}].nestedArray`
    });

    return (
        <div>
         <section className="sectionGroup border-dotted border-2 ring-black p-4 my-4 overflow-auto">
            {groupFields.map( ({id, type1, type2, type3, type4, adaugProdus}, index) => {
            return(
                <div key={id}>
                    <div className='pb-2'>
                        <Controller
                            as={ReactSelect}
                            defaultValue={allSomeOptions[0]}
                            options={allSomeOptions}
                            className="selectionGroup-select mr-4 text-black border p-1 rounded w-1/4"
                            ref={register()}
                            name="type1"
                            control={control}
                            isClearable
                            isMulti
                            name={`itemsGroup[${index}].type1`}
                        />
                        {errors.type1 && <p style={{ color: "red", marginTop: ".5rem" }}>{errors.type1.message}</p>}
                        <Controller
                            as={ReactSelect}
                            defaultValue={trueFalseOptions[0]}
                            options={trueFalseOptions}
                            className="selectionGroup-select mr-4 text-black border p-1 rounded w-1/4"
                            ref={register()}
                            name="type2"
                            control={control}
                            isClearable
                            isMulti
                            name={`itemsGroup[${index}].type2`} 
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
                            name="type3"
                            control={control}
                            isClearable
                            isMulti
                            name={`itemsGroup[${index}].type3`} 
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
                            name={`itemsGroup[${index}].type4`} 
                        />
                        {errors.type4 && <p style={{ color: "red", marginTop: ".5rem" }}>{errors.type4.message}</p>}
                        <input
                            className='text-black border p-1 rounded'
                            ref={register()}
                            name="adaugProdus"
                            placeholder="Adauga produs"
                            className='ml-4'
                            name={`itemsGroup[${index}].adaugProdus`} 
                        />
                        {errors.adaugProdus && <p style={{ color: "red", marginTop: ".5rem" }}>{errors.adaugProdus.message}</p>}
                    </div>
                
                </div>
                )
            })}
                <button onClick={() => groupAppend({index})} className="add-new-section-group-btn text-black border p-1 rounded ml-56 float-right" type="button">
                    Add
                </button>
                <button onClick={() => groupRemove({index})} className="add-new-section-group-btn text-black border p-1 rounded ml-56 float-right" type="button">
                    Remove
                </button>
            </section>
        </div>
      );
    };