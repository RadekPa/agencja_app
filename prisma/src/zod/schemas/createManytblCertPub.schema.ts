import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCertPubCreateManyInputObjectSchema as tblCertPubCreateManyInputObjectSchema } from './objects/tblCertPubCreateManyInput.schema';

export const tblCertPubCreateManySchema: z.ZodType<Prisma.tblCertPubCreateManyArgs> = z.object({ data: z.union([ tblCertPubCreateManyInputObjectSchema, z.array(tblCertPubCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.tblCertPubCreateManyArgs>;

export const tblCertPubCreateManyZodSchema = z.object({ data: z.union([ tblCertPubCreateManyInputObjectSchema, z.array(tblCertPubCreateManyInputObjectSchema) ]),  }).strict();