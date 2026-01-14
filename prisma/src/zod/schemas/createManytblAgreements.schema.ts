import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAgreementsCreateManyInputObjectSchema as tblAgreementsCreateManyInputObjectSchema } from './objects/tblAgreementsCreateManyInput.schema';

export const tblAgreementsCreateManySchema: z.ZodType<Prisma.tblAgreementsCreateManyArgs> = z.object({ data: z.union([ tblAgreementsCreateManyInputObjectSchema, z.array(tblAgreementsCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.tblAgreementsCreateManyArgs>;

export const tblAgreementsCreateManyZodSchema = z.object({ data: z.union([ tblAgreementsCreateManyInputObjectSchema, z.array(tblAgreementsCreateManyInputObjectSchema) ]),  }).strict();