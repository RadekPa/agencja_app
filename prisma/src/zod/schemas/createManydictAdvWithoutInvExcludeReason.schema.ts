import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAdvWithoutInvExcludeReasonCreateManyInputObjectSchema as dictAdvWithoutInvExcludeReasonCreateManyInputObjectSchema } from './objects/dictAdvWithoutInvExcludeReasonCreateManyInput.schema';

export const dictAdvWithoutInvExcludeReasonCreateManySchema: z.ZodType<Prisma.dictAdvWithoutInvExcludeReasonCreateManyArgs> = z.object({ data: z.union([ dictAdvWithoutInvExcludeReasonCreateManyInputObjectSchema, z.array(dictAdvWithoutInvExcludeReasonCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.dictAdvWithoutInvExcludeReasonCreateManyArgs>;

export const dictAdvWithoutInvExcludeReasonCreateManyZodSchema = z.object({ data: z.union([ dictAdvWithoutInvExcludeReasonCreateManyInputObjectSchema, z.array(dictAdvWithoutInvExcludeReasonCreateManyInputObjectSchema) ]),  }).strict();