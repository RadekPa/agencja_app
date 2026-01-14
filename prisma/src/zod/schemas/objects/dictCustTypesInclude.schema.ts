import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustTypesFindManySchema as tblCustTypesFindManySchema } from '../findManytblCustTypes.schema';
import { DictCustTypesCountOutputTypeArgsObjectSchema as DictCustTypesCountOutputTypeArgsObjectSchema } from './DictCustTypesCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  tblCustTypes: z.union([z.boolean(), z.lazy(() => tblCustTypesFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DictCustTypesCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const dictCustTypesIncludeObjectSchema: z.ZodType<Prisma.dictCustTypesInclude> = makeSchema() as unknown as z.ZodType<Prisma.dictCustTypesInclude>;
export const dictCustTypesIncludeObjectZodSchema = makeSchema();
