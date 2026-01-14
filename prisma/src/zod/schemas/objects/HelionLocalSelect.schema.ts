import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ISBNORG: z.boolean().optional(),
  ISBNHELION: z.boolean().optional(),
  TYTULORG: z.boolean().optional(),
  TYTULHELION: z.boolean().optional()
}).strict();
export const HelionLocalSelectObjectSchema: z.ZodType<Prisma.HelionLocalSelect> = makeSchema() as unknown as z.ZodType<Prisma.HelionLocalSelect>;
export const HelionLocalSelectObjectZodSchema = makeSchema();
