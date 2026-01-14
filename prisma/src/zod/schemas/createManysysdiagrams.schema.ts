import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { sysdiagramsCreateManyInputObjectSchema as sysdiagramsCreateManyInputObjectSchema } from './objects/sysdiagramsCreateManyInput.schema';

export const sysdiagramsCreateManySchema: z.ZodType<Prisma.sysdiagramsCreateManyArgs> = z.object({ data: z.union([ sysdiagramsCreateManyInputObjectSchema, z.array(sysdiagramsCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.sysdiagramsCreateManyArgs>;

export const sysdiagramsCreateManyZodSchema = z.object({ data: z.union([ sysdiagramsCreateManyInputObjectSchema, z.array(sysdiagramsCreateManyInputObjectSchema) ]),  }).strict();