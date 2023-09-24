import "./../../scss/Tactic/ModalRole.scss"
import React, { useState } from 'react';
import { RoleInfo } from './Constant';

interface RoleModalProps {
    roles: RoleInfo[];
    currentRole: string | null;
    onClose: () => void;
    onSelect: (role: string) => void;
}

const RoleModal: React.FC<RoleModalProps> = ({ roles, currentRole, onClose, onSelect }) => {
    const [activeRole, setActiveRole] = useState<RoleInfo | null>(null);

    return (
        <div className="role-modal">
            <div className="modal-role-content">
                <div className='title-modal'>
                    <h5>Choose the role of your player</h5>
                    <span className='close' onClick={onClose}>&times;</span>
                </div>
                <div className="modal-flex-row">
                    <div className="modal-role-value">
                        {roles.map((role, index) => (
                            <div
                                key={index}
                                onClick={() => onSelect(role.name)}
                                onMouseEnter={() => setActiveRole(role)}
                                onMouseLeave={() => setActiveRole(null)}
                                className={role.name === currentRole ? "active" : ""}
                            >
                                <div className="but-box">
                                    <button>{role.name}</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    {activeRole && 
                    <div className="hover-modal">
                        <div className="role-description">
                            <h4>{activeRole.name}</h4>
                            <p>{activeRole.description}</p>
                            </div>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default RoleModal;