import { DeleteForever } from '@mui/icons-material';
import { Box, Typography, IconButton } from '@mui/material';
import React, { FC, useCallback, useEffect } from 'react';
import { DropzoneOptions, useDropzone } from 'react-dropzone';
import { useFormContext } from 'react-hook-form';

interface IFileInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
}

export const FileInput: FC<IFileInputProps> = (props) => {
  const { name, label = name } = props;
  const { register, unregister, setValue, watch } = useFormContext();
  const files: File[] = watch(name);

  const onDrop = useCallback<DropzoneOptions['onDrop']>(
    (droppedFiles) => {
      setValue(name, droppedFiles, { shouldValidate: true });
    },
    [setValue, name]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: props.accept,
  });

  useEffect(() => {
    register(name);

    return () => {
      unregister(name);
    };
  }, [register, unregister, name]);
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <Box
        {...getRootProps()}
        sx={{
          padding: 1,
          width: 200,
          height: 150,
          backgroundColor: 'rgb(242, 244, 245)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'dashed',
          textAlign: 'center',
          cursor: 'pointer',
          margin: '0 15px 15px 0',
        }}
      >
        <input {...props} {...getInputProps()} />

        <Typography variant="body2">
          Clique para adicionar ou arraste a imagem aqui
        </Typography>
      </Box>

      {!!files?.length &&
        files.map((file, index) => {
          return (
            <Box
              key={file.name}
              sx={{
                position: 'relative',
                width: 200,
                height: 150,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                margin: '0 15px 15px 0',
              }}
              style={{
                backgroundImage: `url(${URL.createObjectURL(file)})`,
              }}
            >
              {index === 0 ? (
                <Box
                  sx={{
                    backgroundColor: 'blue',
                    padding: '6px 10px',
                    position: 'absolute',
                    color: '#fff',
                    textTransform: 'uppercase',
                    bottom: 0,
                    left: 0,
                  }}
                >
                  <Typography variant="body2">Principal</Typography>
                </Box>
              ) : null}

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  width: '100%',
                  height: '100%',

                  '&:hover': {
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    cursor: 'pointer',
                  },
                }}
              >
                <IconButton onClick={() => {}}>
                  <DeleteForever sx={{ color: '#fff' }} fontSize="large" />
                </IconButton>
              </Box>
            </Box>
          );
        })}
    </Box>
  );
};
