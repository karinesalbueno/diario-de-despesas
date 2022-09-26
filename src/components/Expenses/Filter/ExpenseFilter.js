
const ExpenseFilter = (props) => {

    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value)
    }

    return (
        <div className="expenses-filter">
            <div className="expenses-filter-control">
                <label>Filter by year </label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                {/* {props.items.map(x =>
                        <option key={x.date}>

                            {x.date.getFullYear()}

                        </option>)} */}
                        
                  <option>2022</option>
                  <option>2021</option>
                  <option>2020</option>
                  <option>All</option>


                </select>
            </div>

        </div>

    )
}

export default ExpenseFilter