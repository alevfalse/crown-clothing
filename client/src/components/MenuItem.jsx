import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

// styled components
const BackgroundImage = styled.div`
	width: 100%;
	height: 100%;
	background-position: center;
	background-size: cover;
`

const ContentContainer = styled.div`
	height: 90px;
	padding: 0 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	background-color: white;
	opacity: 0.7;
	position: absolute;

	@media screen and (max-width: 425px) {
		height: 50px;
	}
`

const TitleText = styled.h2`
	font-weight: bold;
	font-size: 24px;
	color: #4a4a4a;
	text-transform: uppercase;

	@media screen and (max-width: 425px) {
		font-size: 18px;
	}
`

const MenuItemWrapper = styled.div`
	height: ${({ size }) => (size ? '380px' : '240px')};
	min-width: 30%;
	overflow: hidden;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	margin: 0 7.5px 15px;

	&:first-child {
		margin-right: 7.5px;
	}

	&:last-child {
		margin-left: 7.5px;
	}

	&:hover {
		cursor: pointer;

		& ${BackgroundImage} {
			transform: scale(1.1);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}

		& ${ContentContainer} {
			opacity: 0.9;
		}
	}

	@media screen and (max-width: 425px) {
		height: 200px;
		margin: 1px;
		min-width: 40%;
		border: none;

		&:first-child {
			margin-right: 0;
		}

		&:last-child {
			margin-left: 0;
		}
	}
`

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
	<MenuItemWrapper size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
		<BackgroundImage
			style={{
				backgroundImage: `url(${imageUrl})`,
			}}
		/>

		<ContentContainer>
			<TitleText>{title}</TitleText>
		</ContentContainer>
	</MenuItemWrapper>
)

export default withRouter(MenuItem)
