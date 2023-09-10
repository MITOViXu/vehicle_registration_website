// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract Vehicle {
    //owner là chủ sở hữu của hợp đồng
    /*
    owner có quyền hạn:
    +)thêm các tài khoản quản trị viên
    +)trực tiếp thêm thông tin về phương tiện
    */
    address public owner;
    /*
    admin là người của trung tâm đăng kiểm
    có quyền hạn:
    thêm dữ liệu, đọc dữ liệu về thông tin xe  
    */
    mapping(address => bool) admins;

    struct Vehicle {
        string vehicleOwner; // chủ xe (mã số CCCD)
        string numberPlate; // biển số xe
        string yearManufac; //năm sản xuất
        uint8 lifetimeLimit; //niêm hạn sử dụng
        string insepectionReportN; // số phiếu kiểm định
        string insepectionValidUntil; //hiệu lực đến ngày
    }
    /*
    Khai báo array xe cộ để lưu trữ thông tin
    */
    Vehicle[] public vehicles;
    //mapping biển số xe => biển số xe là độc nhất và nó gắn liền với xe

    mapping(string => bool) public numberPlates;

    constructor() {
        owner = msg.sender;
        admins[msg.sender] = true; // owner cũng có quyền admin
    }

    modifier onlyOnwer() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }
    modifier onlyAdmin() {
        require(admins[msg.sender], "Only admin can perform this action");
        _;
    }

    function addAdmin(address _admin) public onlyOnwer {
        admins[_admin] = true;
    }

    function getAdmin() public returns (address) {}

    function storeVehicle(
        string memory NumberPlate,
        string memory VehicleOwner,
        string memory YearManufac,
        uint8 LifetimeLimit,
        string memory InsepectionReportN,
        string memory InsepectionValidUntil
    ) public onlyAdmin {
        require(
            !numberPlates[NumberPlate],
            "Vehicle with the same number plate is already exists"
        );
        Vehicle memory newVehicle = Vehicle({
            numberPlate: NumberPlate,
            vehicleOwner: VehicleOwner,
            yearManufac: YearManufac,
            lifetimeLimit: LifetimeLimit,
            insepectionReportN: InsepectionReportN,
            insepectionValidUntil: InsepectionValidUntil
        });
        vehicles.push(newVehicle);
        numberPlates[NumberPlate] = true;
    }

    function getVehicleInfo(
        string memory NumberPlate
    ) public view returns (Vehicle memory) {
        for (uint16 i = 0; i < vehicles.length; i++) {
            if (
                keccak256(abi.encodePacked(vehicles[i].numberPlate)) ==
                keccak256(abi.encodePacked(NumberPlate))
            ) {
                return vehicles[i];
            }
        }
        revert("Can't found the vehicle");
    }
}
