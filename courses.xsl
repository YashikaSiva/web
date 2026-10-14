<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html>
            <head>
                <title>Web Page</title>
            </head>

            <body>
                <table border="1">
                    <tr>
                        <th>Student Name</th>
                        <th>Reg No</th>
                        <th>Mark</th>
                    </tr>

                    <xsl:for-each select="courses/course">
                        <tr>
                            <td>
                                <xsl:value-of select="studentname"/>
                            </td>
                            <td>
                                <xsl:value-of select="regno"/>
                            </td>
                            <td>
                                <xsl:value-of select="mark"/>
                            </td>
                        </tr>
                    </xsl:for-each>

                </table>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>