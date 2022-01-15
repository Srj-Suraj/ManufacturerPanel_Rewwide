import React from "react";
import { Link } from "react-router-dom";
// css
import "./transactions.css";

// img
import personImg from '../img/s4.jpg';

// componnet
const StatusComplete = (
  <i className=" text-success">
    <b>Success</b>
  </i>
);
const StatusPending = (
  <i className="  text-warning">
    <b>Pending</b>
  </i>
);
const StatusCancle = (
  <i className="  text-danger">
    <b>Cancled</b>
  </i>
);
const incomeTag = (
  <i className="  text-success fa fa-arrow-up" >
   <b> income</b>
    </i>
);
const outcomeTag = (
  <i className="  text-danger fa fa-arrow-down" >
   <b>Outcome</b> 
</i>
);

export default function Transactions() {
  return (
    <>
      <div className="container">
        <div className="col-md-12  ml-3 ">
          <p className="btn table-title">All Transactions </p>

          {/* <Link  to='/add-Transactions' className="btn bg-primary text-light  float-right">+ Add Transactions</Link> */}
          <Link to="" className="form-group btn btn-light mr-3 float-right ">
            <i className="fa fa-download mr-3" />
            download PDF
          </Link>
        </div>

        {/* table */}
        <div className="col-md-12 box  mt-5 mb-5 ml-3 p-4 shadow ">
          <div className="d-flex align-items-center">
            {/* select cat */}
            <div className="form-group mr-3">
              <select
                defaultValue="all"
                className="form-control"
                id="Transactions"
              >
                <option>All Transactions</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            {/* cat sear */}
            <div className="form-group mr-3">
              <input
                type="text"
                className="form-control"
                id="Search"
                placeholder="Search"
              />
            </div>
            {/* filters  */}
            {/* select cat */}
            <div className="form-group mr-3">
              <select
                defaultValue="highSelling"
                className="form-control"
                id="highSelling"
              >
                <option>High Selling</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>

            <Link to="" className="form-group btn bg-light mr-3">
              <i className="fa fa-filter" />
              Filter
            </Link>
          </div>

          <table className="table table-hover ">
            <thead>
              <tr>
                <th scope="col"><input type="checkbox"  id="customCheck1" /></th>
                <th scope="col">ID Invoice</th>
                <th scope="col">Date</th>
                <th scope="col">Recipients</th>
                <th scope="col">Amount</th>
                <th scope="col">Type</th>
                <th scope="col">Location</th>
                <th scope="col">Status</th>
                <th scope="col" className="last-column"></th>
              </tr>
            </thead>
            <tbody>
              <tr >
                <td className="align-middle">
                    <input type="checkbox"  id="customCheck1" />
                </td>
                <td className="align-middle">#123461343</td>
                <td className="align-middle">
                  Oct 8, 2021,
                  <br /> 08:32 AM
                </td>
                <td className="align-middle">
                  <img
                    src={personImg}
                    alt="..."
                    className="personImg  "
                    circle="Profile Image"
                  />
                  Jim Morrison
                </td>
                <td className="align-middle">$645.82</td>
                <td className="align-middle"> {incomeTag} </td>
                <td className="align-middle">London,England</td>
                <td className="align-middle"> {StatusComplete} </td>
                <td className="align-middle">
                  <div
                    className=" "
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fa fa-ellipsis-h" />
                  </div>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <Link to="" className="dropdown-item">
                      View
                    </Link>
                  </div>
                </td>
              </tr>

              <tr >
                <td className="align-middle">
                    <input type="checkbox"  id="customCheck1" />
                </td>
                <td className="align-middle">#123461343</td>
                <td className="align-middle">
                  Oct 8, 2021,
                  <br /> 08:32 AM
                </td>
                <td className="align-middle">
                  <img
                    src={personImg}
                    alt="..."
                    className="personImg  "
                    circle="Profile Image"
                  />
                  Jim Morrison
                </td>
                <td className="align-middle">$645.82</td>
                <td className="align-middle">{outcomeTag}</td>
                <td className="align-middle">London,England</td>
                <td className="align-middle"> {StatusPending} </td>
                <td className="align-middle">
                  <div
                    className=" "
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fa fa-ellipsis-h" />
                  </div>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <Link to="" className="dropdown-item">
                      View
                    </Link>
                  </div>
                </td>
              </tr>

              <tr >
                <td className="align-middle">
                    <input type="checkbox"  id="customCheck1" />
                </td>
                <td className="align-middle">#123461343</td>
                <td className="align-middle">
                  Oct 8, 2021,
                  <br /> 08:32 AM
                </td>
                <td className="align-middle">
                  <img
                    src={personImg}
                    alt="..."
                    className="personImg  "
                    circle="Profile Image"
                  />
                  Jim Morrison
                </td>
                <td className="align-middle">$645.82</td>
                <td className="align-middle">{incomeTag}</td>
                <td className="align-middle">London,England</td>
                <td className="align-middle"> {StatusCancle}</td>
                <td className="align-middle">
                  <div
                    className=" "
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fa fa-ellipsis-h" />
                  </div>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <Link to="" className="dropdown-item">
                      View
                    </Link>
                  </div>
                </td>
              </tr>

              <tr >
                <td className="align-middle">
                    <input type="checkbox"  id="customCheck1" />
                </td>
                <td className="align-middle">#123461343</td>
                <td className="align-middle">
                  Oct 8, 2021,
                  <br /> 08:32 AM
                </td>
                <td className="align-middle">
                  <img
                    src={personImg}
                    alt="..."
                    className="personImg  "
                    circle="Profile Image"
                  />
                  Jim Morrison
                </td>
                <td className="align-middle">$645.82</td>
                <td className="align-middle">{outcomeTag}</td>
                <td className="align-middle">London,England</td>
                <td className="align-middle"> {StatusComplete} </td>
                <td className="align-middle">
                  <div
                    className=" "
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fa fa-ellipsis-h" />
                  </div>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <Link to="" className="dropdown-item">
                      View
                    </Link>
                  </div>
                </td>
              </tr>

              <tr >
                <td className="align-middle">
                    <input type="checkbox"  id="customCheck1" />
                </td>
                <td className="align-middle">#123461343</td>
                <td className="align-middle">
                  Oct 8, 2021,
                  <br /> 08:32 AM
                </td>
                <td className="align-middle">
                  <img
                    src={personImg}
                    alt="..."
                    className="personImg  "
                    circle="Profile Image"
                  />
                  Jim Morrison
                </td>
                <td className="align-middle">$645.82</td>
                <td className="align-middle">{incomeTag}</td>
                <td className="align-middle">London,England</td>
                <td className="align-middle"> {StatusPending} </td>
                <td className="align-middle">
                  <div
                    className=" "
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fa fa-ellipsis-h" />
                  </div>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <Link to="" className="dropdown-item">
                      View
                    </Link>
                  </div>
                </td>
              </tr>

              <tr >
                <td className="align-middle">
                    <input type="checkbox"  id="customCheck1" />
                </td>
                <td className="align-middle">#123461343</td>
                <td className="align-middle">
                  Oct 8, 2021,
                  <br /> 08:32 AM
                </td>
                <td className="align-middle">
                  <img
                    src={personImg}
                    alt="..."
                    className="personImg  "
                    circle="Profile Image"
                  />
                  Jim Morrison
                </td>
                <td className="align-middle">$645.82</td>
                <td className="align-middle">{outcomeTag}</td>
                <td className="align-middle">London,England</td>
                <td className="align-middle"> {StatusCancle}</td>
                <td className="align-middle">
                  <div
                    className=" "
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fa fa-ellipsis-h" />
                  </div>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <Link to="" className="dropdown-item">
                      View
                    </Link>
                  </div>
                </td>
              </tr>

              <tr >
                <td className="align-middle">
                    <input type="checkbox"  id="customCheck1" />
                </td>
                <td className="align-middle">#123461343</td>
                <td className="align-middle">
                  Oct 8, 2021,
                  <br /> 08:32 AM
                </td>
                <td className="align-middle">
                  <img
                    src={personImg}
                    alt="..."
                    className="personImg  "
                    circle="Profile Image"
                  />
                  Jim Morrison
                </td>
                <td className="align-middle">$645.82</td>
                <td className="align-middle">{incomeTag}</td>
                <td className="align-middle">London,England</td>
                <td className="align-middle"> {StatusComplete} </td>
                <td className="align-middle">
                  <div
                    className=" "
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fa fa-ellipsis-h" />
                  </div>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <Link to="" className="dropdown-item">
                      View
                    </Link>
                  </div>
                </td>
              </tr>

              <tr >
                <td className="align-middle">
                    <input type="checkbox"  id="customCheck1" />
                </td>
                <td className="align-middle">#123461343</td>
                <td className="align-middle">
                  Oct 8, 2021,
                  <br /> 08:32 AM
                </td>
                <td className="align-middle">
                  <img
                    src={personImg}
                    alt="..."
                    className="personImg  "
                    circle="Profile Image"
                  />
                  Jim Morrison
                </td>
                <td className="align-middle">$645.82</td>
                <td className="align-middle">{outcomeTag}</td>
                <td className="align-middle">London,England</td>
                <td className="align-middle"> {StatusPending} </td>
                <td className="align-middle">
                  <div
                    className=" "
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fa fa-ellipsis-h" />
                  </div>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <Link to="" className="dropdown-item">
                      View
                    </Link>
                  </div>
                </td>
              </tr>

              <tr >
                <td className="align-middle">
                    <input type="checkbox"  id="customCheck1" />
                </td>
                <td className="align-middle">#123461343</td>
                <td className="align-middle">
                  Oct 8, 2021,
                  <br /> 08:32 AM
                </td>
                <td className="align-middle">
                  <img
                    src={personImg}
                    alt="..."
                    className="personImg  "
                    circle="Profile Image"
                  />
                  Jim Morrison
                </td>
                <td className="align-middle">$645.82</td>
                <td className="align-middle">{outcomeTag}</td>
                <td className="align-middle">London,England</td>
                <td className="align-middle"> {StatusCancle}</td>
                <td className="align-middle">
                  <div
                    className=" "
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fa fa-ellipsis-h" />
                  </div>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <Link to="" className="dropdown-item">
                      View
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          {/* pagination  */}
          <div className="nav   justify-content-end">
            <nav aria-label="...">
              <ul className="pagination">
                <li className="page-item disabled">
                  <button className="page-link" tabIndex="-1">
                    Previous
                  </button>{" "}
                </li>
                <li className="page-item active">
                  <button className="page-link">1</button>
                </li>
                <li className="page-item ">
                  <button className="page-link">2 </button>{" "}
                </li>
                <li className="page-item">
                  <button className="page-link">3</button>
                </li>
                <li className="page-item">
                  <button className="page-link">Next</button>{" "}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
