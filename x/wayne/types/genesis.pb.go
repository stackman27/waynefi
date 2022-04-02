// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: wayne/genesis.proto

package types

import (
	fmt "fmt"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

// GenesisState defines the wayne module's genesis state.
type GenesisState struct {
	Params            Params         `protobuf:"bytes,1,opt,name=params,proto3" json:"params"`
	PoolList          []Pool         `protobuf:"bytes,2,rep,name=poolList,proto3" json:"poolList"`
	PoolCount         uint64         `protobuf:"varint,3,opt,name=poolCount,proto3" json:"poolCount,omitempty"`
	DepositList       []Deposit      `protobuf:"bytes,4,rep,name=depositList,proto3" json:"depositList"`
	DepositCount      uint64         `protobuf:"varint,5,opt,name=depositCount,proto3" json:"depositCount,omitempty"`
	BorrowList        []Borrow       `protobuf:"bytes,6,rep,name=borrowList,proto3" json:"borrowList"`
	BorrowCount       uint64         `protobuf:"varint,7,opt,name=borrowCount,proto3" json:"borrowCount,omitempty"`
	UserList          []User         `protobuf:"bytes,8,rep,name=userList,proto3" json:"userList"`
	UserCount         uint64         `protobuf:"varint,9,opt,name=userCount,proto3" json:"userCount,omitempty"`
	InterfaceAprList  []InterfaceApr `protobuf:"bytes,10,rep,name=interfaceAprList,proto3" json:"interfaceAprList"`
	InterfaceAprCount uint64         `protobuf:"varint,11,opt,name=interfaceAprCount,proto3" json:"interfaceAprCount,omitempty"`
}

func (m *GenesisState) Reset()         { *m = GenesisState{} }
func (m *GenesisState) String() string { return proto.CompactTextString(m) }
func (*GenesisState) ProtoMessage()    {}
func (*GenesisState) Descriptor() ([]byte, []int) {
	return fileDescriptor_f92d6fa75d77cb4f, []int{0}
}
func (m *GenesisState) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *GenesisState) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_GenesisState.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *GenesisState) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GenesisState.Merge(m, src)
}
func (m *GenesisState) XXX_Size() int {
	return m.Size()
}
func (m *GenesisState) XXX_DiscardUnknown() {
	xxx_messageInfo_GenesisState.DiscardUnknown(m)
}

var xxx_messageInfo_GenesisState proto.InternalMessageInfo

func (m *GenesisState) GetParams() Params {
	if m != nil {
		return m.Params
	}
	return Params{}
}

func (m *GenesisState) GetPoolList() []Pool {
	if m != nil {
		return m.PoolList
	}
	return nil
}

func (m *GenesisState) GetPoolCount() uint64 {
	if m != nil {
		return m.PoolCount
	}
	return 0
}

func (m *GenesisState) GetDepositList() []Deposit {
	if m != nil {
		return m.DepositList
	}
	return nil
}

func (m *GenesisState) GetDepositCount() uint64 {
	if m != nil {
		return m.DepositCount
	}
	return 0
}

func (m *GenesisState) GetBorrowList() []Borrow {
	if m != nil {
		return m.BorrowList
	}
	return nil
}

func (m *GenesisState) GetBorrowCount() uint64 {
	if m != nil {
		return m.BorrowCount
	}
	return 0
}

func (m *GenesisState) GetUserList() []User {
	if m != nil {
		return m.UserList
	}
	return nil
}

func (m *GenesisState) GetUserCount() uint64 {
	if m != nil {
		return m.UserCount
	}
	return 0
}

func (m *GenesisState) GetInterfaceAprList() []InterfaceApr {
	if m != nil {
		return m.InterfaceAprList
	}
	return nil
}

func (m *GenesisState) GetInterfaceAprCount() uint64 {
	if m != nil {
		return m.InterfaceAprCount
	}
	return 0
}

func init() {
	proto.RegisterType((*GenesisState)(nil), "cosmonaut.wayne.wayne.GenesisState")
}

func init() { proto.RegisterFile("wayne/genesis.proto", fileDescriptor_f92d6fa75d77cb4f) }

var fileDescriptor_f92d6fa75d77cb4f = []byte{
	// 408 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x7c, 0x92, 0x41, 0x4f, 0xc2, 0x30,
	0x14, 0xc7, 0x37, 0x99, 0x08, 0x1d, 0x07, 0xac, 0x9a, 0x20, 0xea, 0x5c, 0xf0, 0xb2, 0x83, 0xd9,
	0x12, 0x3c, 0x1a, 0x0f, 0x0e, 0xa3, 0x31, 0xf1, 0x60, 0x30, 0x5c, 0xbc, 0x98, 0x81, 0x75, 0x2e,
	0x81, 0x75, 0x59, 0xbb, 0x20, 0xdf, 0xc2, 0x8f, 0xc5, 0x91, 0xa3, 0x17, 0x8d, 0x81, 0x2f, 0x62,
	0xd6, 0x57, 0xe6, 0x08, 0xce, 0x0b, 0x74, 0xff, 0xbe, 0xff, 0xfb, 0xbd, 0xfe, 0x5b, 0xb4, 0x33,
	0xf6, 0x26, 0x21, 0x71, 0x7c, 0x12, 0x12, 0x16, 0x30, 0x3b, 0x8a, 0x29, 0xa7, 0x78, 0x6f, 0x40,
	0xd9, 0x88, 0x86, 0x5e, 0xc2, 0x6d, 0xb1, 0x0d, 0xbf, 0xcd, 0x5d, 0x9f, 0xfa, 0x54, 0x54, 0x38,
	0xe9, 0x0a, 0x8a, 0x9b, 0x18, 0x3a, 0x44, 0x5e, 0xec, 0x8d, 0x64, 0x83, 0x66, 0x5d, 0x6a, 0x94,
	0x0e, 0xa5, 0x22, 0x39, 0xcf, 0x24, 0xa2, 0x2c, 0xe0, 0xab, 0xd6, 0x3e, 0x8d, 0x63, 0x3a, 0x5e,
	0xb5, 0x26, 0x8c, 0xc4, 0x52, 0xd9, 0x07, 0x25, 0x08, 0x39, 0x89, 0x5f, 0xbc, 0x01, 0x79, 0xf2,
	0x22, 0xb9, 0xd5, 0xfa, 0xd4, 0x50, 0xed, 0x06, 0x46, 0x7f, 0xe0, 0x1e, 0x27, 0xf8, 0x1c, 0x95,
	0x61, 0x90, 0x86, 0x6a, 0xaa, 0x96, 0xde, 0x3e, 0xb2, 0xff, 0x3c, 0x8a, 0x7d, 0x2f, 0x8a, 0x5c,
	0x6d, 0xfa, 0x75, 0xac, 0x74, 0xa5, 0x05, 0x5f, 0xa0, 0x4a, 0x3a, 0xf1, 0x5d, 0xc0, 0x78, 0x63,
	0xc3, 0x2c, 0x59, 0x7a, 0xfb, 0xa0, 0xc8, 0x4e, 0xe9, 0x50, 0x9a, 0x33, 0x0b, 0x3e, 0x44, 0xd5,
	0x74, 0xdd, 0xa1, 0x49, 0xc8, 0x1b, 0x25, 0x53, 0xb5, 0xb4, 0xee, 0xaf, 0x80, 0xaf, 0x91, 0x2e,
	0x0f, 0x2f, 0xfa, 0x6b, 0xa2, 0xbf, 0x51, 0xd0, 0xff, 0x0a, 0x2a, 0x25, 0x22, 0x6f, 0xc4, 0x2d,
	0x54, 0x93, 0x9f, 0x00, 0xda, 0x14, 0xa0, 0x15, 0x0d, 0x77, 0x10, 0x82, 0x4c, 0x05, 0xaa, 0x2c,
	0x50, 0x45, 0x49, 0xb8, 0xa2, 0x50, 0x92, 0x72, 0x36, 0x6c, 0x22, 0x1d, 0xbe, 0x80, 0xb3, 0x25,
	0x38, 0x79, 0x29, 0xcd, 0x2b, 0xbd, 0x26, 0x01, 0xa9, 0xfc, 0x9b, 0x57, 0x8f, 0x91, 0x78, 0x99,
	0xd7, 0xd2, 0x92, 0xe6, 0x95, 0xae, 0xa1, 0x7d, 0x15, 0xf2, 0xca, 0x04, 0xdc, 0x43, 0xf5, 0xec,
	0xc6, 0x2f, 0x23, 0x80, 0x20, 0x01, 0x39, 0x29, 0x80, 0xdc, 0xe6, 0xca, 0x25, 0x6c, 0xad, 0x05,
	0x3e, 0x45, 0xdb, 0x79, 0x0d, 0xe0, 0xba, 0x80, 0xaf, 0x6f, 0xb8, 0xee, 0x74, 0x6e, 0xa8, 0xb3,
	0xb9, 0xa1, 0x7e, 0xcf, 0x0d, 0xf5, 0x7d, 0x61, 0x28, 0xb3, 0x85, 0xa1, 0x7c, 0x2c, 0x0c, 0xe5,
	0xd1, 0xf2, 0x03, 0xfe, 0x9a, 0xf4, 0xed, 0x01, 0x1d, 0x39, 0xd9, 0x38, 0x0e, 0xbc, 0xd4, 0x37,
	0xf9, 0xcf, 0x27, 0x11, 0x61, 0xfd, 0xb2, 0x78, 0xaa, 0x67, 0x3f, 0x01, 0x00, 0x00, 0xff, 0xff,
	0x86, 0x1a, 0x3c, 0xc0, 0x6a, 0x03, 0x00, 0x00,
}

func (m *GenesisState) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *GenesisState) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *GenesisState) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.InterfaceAprCount != 0 {
		i = encodeVarintGenesis(dAtA, i, uint64(m.InterfaceAprCount))
		i--
		dAtA[i] = 0x58
	}
	if len(m.InterfaceAprList) > 0 {
		for iNdEx := len(m.InterfaceAprList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.InterfaceAprList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x52
		}
	}
	if m.UserCount != 0 {
		i = encodeVarintGenesis(dAtA, i, uint64(m.UserCount))
		i--
		dAtA[i] = 0x48
	}
	if len(m.UserList) > 0 {
		for iNdEx := len(m.UserList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.UserList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x42
		}
	}
	if m.BorrowCount != 0 {
		i = encodeVarintGenesis(dAtA, i, uint64(m.BorrowCount))
		i--
		dAtA[i] = 0x38
	}
	if len(m.BorrowList) > 0 {
		for iNdEx := len(m.BorrowList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.BorrowList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x32
		}
	}
	if m.DepositCount != 0 {
		i = encodeVarintGenesis(dAtA, i, uint64(m.DepositCount))
		i--
		dAtA[i] = 0x28
	}
	if len(m.DepositList) > 0 {
		for iNdEx := len(m.DepositList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.DepositList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x22
		}
	}
	if m.PoolCount != 0 {
		i = encodeVarintGenesis(dAtA, i, uint64(m.PoolCount))
		i--
		dAtA[i] = 0x18
	}
	if len(m.PoolList) > 0 {
		for iNdEx := len(m.PoolList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.PoolList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x12
		}
	}
	{
		size, err := m.Params.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintGenesis(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0xa
	return len(dAtA) - i, nil
}

func encodeVarintGenesis(dAtA []byte, offset int, v uint64) int {
	offset -= sovGenesis(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *GenesisState) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.Params.Size()
	n += 1 + l + sovGenesis(uint64(l))
	if len(m.PoolList) > 0 {
		for _, e := range m.PoolList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if m.PoolCount != 0 {
		n += 1 + sovGenesis(uint64(m.PoolCount))
	}
	if len(m.DepositList) > 0 {
		for _, e := range m.DepositList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if m.DepositCount != 0 {
		n += 1 + sovGenesis(uint64(m.DepositCount))
	}
	if len(m.BorrowList) > 0 {
		for _, e := range m.BorrowList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if m.BorrowCount != 0 {
		n += 1 + sovGenesis(uint64(m.BorrowCount))
	}
	if len(m.UserList) > 0 {
		for _, e := range m.UserList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if m.UserCount != 0 {
		n += 1 + sovGenesis(uint64(m.UserCount))
	}
	if len(m.InterfaceAprList) > 0 {
		for _, e := range m.InterfaceAprList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if m.InterfaceAprCount != 0 {
		n += 1 + sovGenesis(uint64(m.InterfaceAprCount))
	}
	return n
}

func sovGenesis(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozGenesis(x uint64) (n int) {
	return sovGenesis(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *GenesisState) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowGenesis
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: GenesisState: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: GenesisState: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Params", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Params.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PoolList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.PoolList = append(m.PoolList, Pool{})
			if err := m.PoolList[len(m.PoolList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field PoolCount", wireType)
			}
			m.PoolCount = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.PoolCount |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field DepositList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.DepositList = append(m.DepositList, Deposit{})
			if err := m.DepositList[len(m.DepositList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 5:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field DepositCount", wireType)
			}
			m.DepositCount = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.DepositCount |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field BorrowList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.BorrowList = append(m.BorrowList, Borrow{})
			if err := m.BorrowList[len(m.BorrowList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 7:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field BorrowCount", wireType)
			}
			m.BorrowCount = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.BorrowCount |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 8:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field UserList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.UserList = append(m.UserList, User{})
			if err := m.UserList[len(m.UserList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 9:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field UserCount", wireType)
			}
			m.UserCount = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.UserCount |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 10:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field InterfaceAprList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.InterfaceAprList = append(m.InterfaceAprList, InterfaceApr{})
			if err := m.InterfaceAprList[len(m.InterfaceAprList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 11:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field InterfaceAprCount", wireType)
			}
			m.InterfaceAprCount = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.InterfaceAprCount |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipGenesis(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthGenesis
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipGenesis(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowGenesis
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthGenesis
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupGenesis
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthGenesis
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthGenesis        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowGenesis          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupGenesis = fmt.Errorf("proto: unexpected end of group")
)
