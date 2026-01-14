import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tblClients_obsolete: z.boolean().optional()
}).strict();
export const DictRepModesCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.DictRepModesCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.DictRepModesCountOutputTypeSelect>;
export const DictRepModesCountOutputTypeSelectObjectZodSchema = makeSchema();
