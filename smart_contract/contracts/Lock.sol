// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract Lock {
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
    //mapping(address => bool) admins;

    struct Vehicle {
        string vehicleOwner; // chủ xe (mã số CCCD)
        string numberPlate; // biển số xe
        uint16 yearManufac; //năm sản xuất
        uint16 lifetimeLimit; //niêm hạn sử dụng
        string insepectionReportN; // số phiếu kiểm định
        string insepectionValidUntil; //hiệu lực đến nam
        string typeOf; //loại phương tiện
        string mark; //nhãn hiệu xe
        uint256 modelCode; // số loại
        uint256 chassicNum; //số khung
    }
    /*
    Khai báo array xe cộ để lưu trữ thông tin
    */
    Vehicle[] public vehicles;
    //mapping biển số xe => biển số xe là độc nhất và nó gắn liền với xe

    mapping(string => bool) public numberPlates;

    constructor() {
        owner = msg.sender;
        //admins[msg.sender] = true; // owner cũng có quyền admin
    }

    //event khi update thông tin thành công
    event NewUpdate(address indexed from, uint256 timestamp, string message);

    modifier onlyOnwer() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }

    function storeVehicle(
        string memory NumberPlate,
        string memory VehicleOwner,
        uint16 YearManufac,
        uint16 LifetimeLimit,
        string memory InsepectionReportN,
        string memory InsepectionValidUntil,
        string memory Typeof,
        string memory Mark,
        uint256 ModelCode,
        uint256 ChassicNum
    ) public onlyOnwer {
        //trùng biển số xe
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
            insepectionValidUntil: InsepectionValidUntil,
            typeOf: Typeof,
            mark: Mark,
            modelCode: ModelCode,
            chassicNum: ChassicNum
        });
        vehicles.push(newVehicle);
        numberPlates[NumberPlate] = true;
        emit NewUpdate(msg.sender, block.timestamp, "Successfull update!");
    }

    function getVehicleInfo(
        string memory Numberplate
    ) public view returns (Vehicle memory) {
        for (uint8 i = 0; i < vehicles.length; i++) {
            if (
                keccak256(abi.encodePacked(vehicles[i].numberPlate)) ==
                keccak256(abi.encodePacked(Numberplate))
            ) {
                return vehicles[i];
            }
        }
        revert("Can't found the vehicle");
    }

    function getCar() public view returns (Vehicle[] memory) {
        return vehicles;
    }
}