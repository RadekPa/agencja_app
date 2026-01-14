import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustTypesFindManySchema as tblCustTypesFindManySchema } from '../findManytblCustTypes.schema';
import { DictCustTypesCountOutputTypeArgsObjectSchema as DictCustTypesCountOutputTypeArgsObjectSchema } from './DictCustTypesCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  CustTypeID: z.boolean().optional(),
  CustTypeName: z.boolean().optional(),
  CustTypeDesc: z.boolean().optional(),
  tblCustTypes: z.union([z.boolean(), z.lazy(() => tblCustTypesFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DictCustTypesCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const dictCustTypesSelectObjectSchema: z.ZodType<Prisma.dictCustTypesSelect> = makeSchema() as unknown as z.ZodType<Prisma.dictCustTypesSelect>;
export const dictCustTypesSelectObjectZodSchema = makeSchema();
