import { getEmployees, getOrders } from "./database.js"

// document.addEventListener(
//     "click",
//     (clickEvent) => {           // function that takes place when the item is clicked.
//         const itemClicked = clickEvent.target
//         if (itemClicked.id.startsWith("employee")) {
//             const [,employeeId] = itemClicked.id.split("--")
           

//             for (const employee of employees) {
//                 if (employee.id === parseInt(employeeId)) {
//                     const employeeOrders = orders.filter(orders.employeeId === employee.id);
//                     window.alert(`${employee.name} sold ${employeeeOrders.length} products.`)
//                 }
//             }
//         }
//     }
// )

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [, employeeId] = itemClicked.id.split("--") //don't 100% understand this step.

            for (const employee of employees) {
                if ( employee.id === parseInt(employeeId)) {

                    const employeeOrders = orders.filter(  // storing matching values as true in array employeeOrders (I think)
                        (order) => {
                            if (order.employeeId === employee.id) {
                                return true  
                            }
                        }
                    )

                    window.alert(` ${employee.name} sold ${employeeOrders.length} products `)
                }
            }
        }
    }
)

const employees = getEmployees()
const orders = getOrders()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

//Copied from above
// html += `<li>${employee.name}</li>`


// const employeeArray = itemClicked.id.split("--")
