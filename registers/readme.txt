To use

Extract all files from the zip archive
Open regview.php with Firefox

---------------------------------
Deliverables:
---------------------------------

* reg_view.php*                 HTML-based interactive register descriptions (use Firefox!)


---------------------------------
Register Viewer reg_view.php.htm
---------------------------------

Auto-generated register description of all registers within the chip including those within cores.

Collates all chip registers, with exception of:
(1) USBMPH: information not currently available in this format.
    Refer to:
    "USB-HS MPH High-Speed USB Multi-Port Host Controller Core v4.2".
(2) ARM: Registers within the ARM itself e.g. distributed interrupt controller. 
    The information is not currently available in this format.
    Refer to:
    "ARM11 MPCore Processor Technical Reference Manual r2p0" ARM DDI 0360D.

The following buttons do not work in IExplorer; Firefox should be used.
Click on the 'B' button at the top to toggle on/off displaying of information on registers within all blocks.
Click on the 'F' button at the top to toggle on/off displaying of information on fields within all registers.
Click on 'Show/Hide Block' links to toggle on/off displaying of information on registers within a specific block.
For memory regions e.g. BOOTROM there are no registers within the block so this does nothing.
Click on 'Show/Hide Fields' links to toggle on/off displaying of information on fields within a specific registers.


Key to Access types:
* R/W = Read-write
* RW = Read-write
* R = Read-only
* RO = Read-only
* W = Write-only
* R/C = Readable; write 1 to clear
* C1 = Write 1 to clear
* S1 = Write 1 to clear





