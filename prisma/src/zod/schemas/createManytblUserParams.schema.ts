import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblUserParamsCreateManyInputObjectSchema as tblUserParamsCreateManyInputObjectSchema } from './objects/tblUserParamsCreateManyInput.schema';

export const tblUserParamsCreateManySchema: z.ZodType<Prisma.tblUserParamsCreateManyArgs> = z.object({ data: z.union([ tblUserParamsCreateManyInputObjectSchema, z.array(tblUserParamsCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.tblUserParamsCreateManyArgs>;

export const tblUserParamsCreateManyZodSchema = z.object({ data: z.union([ tblUserParamsCreateManyInputObjectSchema, z.array(tblUserParamsCreateManyInputObjectSchema) ]),  }).strict();