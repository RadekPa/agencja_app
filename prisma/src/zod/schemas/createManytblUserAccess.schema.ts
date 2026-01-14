import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblUserAccessCreateManyInputObjectSchema as tblUserAccessCreateManyInputObjectSchema } from './objects/tblUserAccessCreateManyInput.schema';

export const tblUserAccessCreateManySchema: z.ZodType<Prisma.tblUserAccessCreateManyArgs> = z.object({ data: z.union([ tblUserAccessCreateManyInputObjectSchema, z.array(tblUserAccessCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.tblUserAccessCreateManyArgs>;

export const tblUserAccessCreateManyZodSchema = z.object({ data: z.union([ tblUserAccessCreateManyInputObjectSchema, z.array(tblUserAccessCreateManyInputObjectSchema) ]),  }).strict();