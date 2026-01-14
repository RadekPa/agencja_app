import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPdoxInvMatCreateManyInputObjectSchema as tblPdoxInvMatCreateManyInputObjectSchema } from './objects/tblPdoxInvMatCreateManyInput.schema';

export const tblPdoxInvMatCreateManySchema: z.ZodType<Prisma.tblPdoxInvMatCreateManyArgs> = z.object({ data: z.union([ tblPdoxInvMatCreateManyInputObjectSchema, z.array(tblPdoxInvMatCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.tblPdoxInvMatCreateManyArgs>;

export const tblPdoxInvMatCreateManyZodSchema = z.object({ data: z.union([ tblPdoxInvMatCreateManyInputObjectSchema, z.array(tblPdoxInvMatCreateManyInputObjectSchema) ]),  }).strict();